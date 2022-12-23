import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/forms/Input";
import { ModalCustom } from "../components/Modal";
import { format } from "date-fns";
import Logo from "../assets/img/logo.jpg";
import { API_URL } from "../config";
import { AuthContext } from "../context/AuthContext";

export default function Agenda() {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [citas, setCitas] = useState([]);
    const [cita, setCita] = useState({
        fecha: "",
        hora: "",
        doctor: "",
        usuario: "cat",
        estado: "",
    });
    const [show, setShow] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [updated, setUpdated] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        const url = id ? API_URL + "/agendar/" + id : API_URL + "/agendar";

        const response = await fetch(url, {
            method: id ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cita),
        });
        const { message } = await response.json();
        setShow(false);
        alert(message);
        setUpdated(!updated);
    }

    async function edit(id) {
        const response = await fetch(API_URL + "/agendar/" + id);
        const citaGet = await response.json();
        const {
            _id,
            fecha,
            hora,
            estado,
            doctor: { nombre },
            paciente: { usuario },
        } = citaGet;
        console.log(estado);
        setId(_id);
        setCita({ fecha, hora, estado, doctor: nombre, usuario });

        setShow(true);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCita((cita) => ({ ...cita, [name]: value }));
    };

    const cleanData = () => {
        setId(null);
        cita.doctor = "";
        cita.estado = "";
        cita.fecha = "";
        cita.hora = "";
    };
    useEffect(() => {
        (async () => {
            const agendas = await fetch(API_URL + "/agendar");
            const agenda = await agendas.json();
            setCitas(agenda);
            const doctors = await fetch(API_URL + "/doctor");
            const doctores = await doctors.json();
            setDoctors(doctores);
        })();
    }, [updated]);
    useEffect(() => {
        (() => {
            if (!token) {
                navigate("/");
            }
        })();
    });
    const hours = [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
    ];

    const estados = ["Creado", "Cancelado"];

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "0rem",
                }}
                className="navbar navbar-expand-md nav-color py-0"
            >
                <div className="navbar-brand py-0">
                    <Link to="/home">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="60"
                            height="60"
                            className="d-inline-block align-text-top"
                        />
                    </Link>
                </div>
                <nav className="navbar navbar-expand-md nav-color py-0">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll bs-scroll-height">
                                <li className="nav-item">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            cleanData();
                                            setShow(true);
                                        }}
                                        style={{
                                            backgroundColor:
                                                "rgb(213, 244, 244)",
                                            color: "rgba(0, 0, 0, 0.55)",
                                            border: "none",
                                            marginTop: ".2rem",
                                        }}
                                    >
                                        Pedir Cita
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {token && (
                                        <button
                                            className="btn btn-primary"
                                            onClick={logout}
                                            style={{
                                                backgroundColor:
                                                    "rgb(213, 244, 244)",
                                                color: "rgba(0, 0, 0, 0.55)",
                                                border: "none",
                                                marginTop: ".2rem",
                                            }}
                                            variant="secondary"
                                        >
                                            Cerrar Sesión
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#nav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
            <ModalCustom
                title={
                    id === null
                        ? "Agendar Cita Medica"
                        : "Actualizar Cita Medica"
                }
                show={show}
                handleClose={() => setShow(false)}
            >
                <form onSubmit={onSubmit}>
                    <label className="fw-bolder">Fecha de Agendamiento:</label>
                    <Input
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={
                            cita.fecha !== ""
                                ? format(new Date(cita.fecha), "yyyy-MM-dd")
                                : ""
                        }
                        onChange={(v) => handleChange(v)}
                        className="form-control mb-3"
                    ></Input>
                    <label className="fw-bolder">Doctor:</label>
                    <select
                        className="form-control mb-3"
                        name="doctor"
                        id="doctor"
                        onChange={(v) => handleChange(v)}
                        defaultValue=""
                        value={cita.doctor}
                    >
                        <option value="" disabled>
                            Seleccione un Doctor
                        </option>
                        {doctors.map((doctor) => (
                            <option value={doctor.nombre}>
                                {doctor.nombre}
                            </option>
                        ))}
                    </select>
                    <select
                        className="form-control mb-3"
                        name="hora"
                        id="hora"
                        onChange={(v) => handleChange(v)}
                        defaultValue=""
                        value={cita.hora}
                    >
                        <option value="" disabled>
                            Seleccione una hora
                        </option>
                        {hours.map((hour) => (
                            <option value={hour}>{hour}</option>
                        ))}
                    </select>
                    {cita.estado === "" ? (
                        ""
                    ) : (
                        <select
                            className="form-control mb-3"
                            name="estado"
                            id="estado"
                            onChange={(v) => handleChange(v)}
                            defaultValue=""
                            value={cita.estado}
                        >
                            <option value="" disabled>
                                Seleccione un Estado
                            </option>
                            {estados.map((estado) => (
                                <option value={estado}>{estado}</option>
                            ))}
                        </select>
                    )}
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                                backgroundColor: "rgb(213, 244, 244)",
                                color: "rgba(0, 0, 0, 0.55)",
                                borderRadius: "1rem",
                                fontSize: "17px",
                                border: "none",
                                width: "110px",
                                height: "40px",
                            }}
                        >
                            Agendar
                        </button>
                    </div>
                </form>
            </ModalCustom>

            <div
                style={{
                    display: "flex",
                    marginTop: "2rem",
                }}
            >
                <table className="table table-bordered table-custom">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Especialidad</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map((cita, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>
                                    {new Date(cita.fecha).toLocaleDateString(
                                        "en-US"
                                    )}
                                </td>
                                <td>{cita.hora}</td>
                                <td>
                                    {cita.doctor.nombre +
                                        " " +
                                        cita.doctor.apellido}
                                </td>
                                <td>{cita.doctor.especialidad}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => edit(cita._id)}
                                        style={{
                                            backgroundColor:
                                                "rgb(213, 244, 244)",
                                            color: "rgba(0, 0, 0, 0.55)",
                                            borderRadius: "1rem",
                                            fontSize: "17px",
                                            border: "none",
                                        }}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
