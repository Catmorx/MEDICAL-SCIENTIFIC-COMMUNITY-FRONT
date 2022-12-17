import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/forms/Input";
import Gap from "../components/utils/Gap";
import Button from "../components/forms/Button";
import "../assets/Agenda.css";
import Card from "../components/utils/Card";

export default function Agenda() {
    const [fecha, setFecha] = useState("");
    const [estado, setEstado] = useState("");
    const [doctor, setDoctor] = useState("");
    // const [paciente, setPaciente] = useState("");
    // const [documento, setDocumento] = useState("");

    async function onSubmit(e) {
        try {
            e.preventDefault();
            await fetch("http://localhost:4000/agendar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fecha,
                estado,
                usuario: "cat",
                doctorName: doctor,
            }),
        })
            .then((response) => {
                return response.json();
                
            })
            .catch((error) => {
                alert("Llene los campos")
                console.error(error)
            })
            .then((response) => {
                alert("Cita Agendada")
                e.target.reset();
            });
        } catch (error) {
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-md nav-color py-0">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
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

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agendar Cita Medica</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='now' onSubmit={onSubmit}>
                            <div className="modal-body">
                                <Input id="fecha" type="date" onChange={(v) => setFecha(v.target.value)}></Input>
                                <Gap>0.5rem</Gap>
                                <Input onChange={(v) => setDoctor(v.target.value)}>Nombre del Doctor</Input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Agendar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Especialidad</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
}
