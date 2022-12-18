import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/forms/Input";
import { ModalCustom } from "../components/Modal";

export default function Agenda() {
  const [citas, setCitas] = useState([]);
  const [cita, setCita] = useState({
    fecha: "",
    hora: "",
    doctor: "",
    usuario: "cat",
  });
  const [show, setShow] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/agendar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cita),
    });
    const { message } = await response.json();
    setShow(false);
    alert(message);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita((cita) => ({ ...cita, [name]: value }));
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/agendar/");
      const data = await response.json();
      setCitas(data);
    })();
  }, []);

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

  return (
    <>
      <nav className="navbar navbar-expand-md nav-color py-0">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShow(true)}
          style={{
            backgroundColor: "rgb(213, 244, 244)",
            color: "rgba(0, 0, 0, 0.55)",
            borderRadius: "2rem",
            fontSize: "20px",
            border: "none",
            width: "150px",
            height: "40px",
          }}
        >
          Pedir Cita
        </button>
        <Link to="/">
          <h1 className="topmenu">Home</h1>
        </Link>
      </nav>

      <ModalCustom
        title="Agendar Cita Medica"
        show={show}
        handleClose={() => setShow(false)}
      >
        <form onSubmit={onSubmit}>
          <label className="fw-bolder">Fecha de Agendamiento:</label>
          <Input
            id="fecha"
            name="fecha"
            type="date"
            onChange={(v) => handleChange(v)}
            className="form-control mb-3"
          ></Input>
          <label className="fw-bolder">Doctor:</label>
          <Input
            id="doctor"
            name="doctor"
            type="text"
            onChange={(v) => handleChange(v)}
            className="form-control mb-3"
          >
            Nombre del Doctor
          </Input>
          <select
            className="form-control mb-3"
            name="hora"
            id="hora"
            onChange={(v) => handleChange(v)}
          >
            <option value="" selected>
              Seleccione una hora
            </option>
            {hours.map((hour) => (
              <option value={hour}>{hour}</option>
            ))}
          </select>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Agendar
            </button>
          </div>
        </form>
      </ModalCustom>

      <div>
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
                <td>{new Date(cita.fecha).toLocaleDateString("en-US")}</td>
                <td>{cita.hora}</td>
                <td>{cita.doctor.nombre + " " + cita.doctor.apellido}</td>
                <td>{cita.paciente.nombre + " " + cita.paciente.apellido}</td>
                <td>
                  <button className="btn btn-primary">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
