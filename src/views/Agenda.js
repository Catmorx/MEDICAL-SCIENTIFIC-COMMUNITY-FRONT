import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Input from '../components/forms/Input';
import Gap from '../components/utils/Gap';
import Button from '../components/forms/Button';
import Card from '../components/utils/Card';

export default function Agenda() {
    const [fecha, setFecha] = useState("");
    const [estado, setEstado] = useState("");
    const [doctor, setDoctor] = useState("");
    const [paciente, setPaciente] = useState("");
    const [documento, setDocumento] = useState("");


    async function onSubmit(e) {
        e.preventDefault();
        alert("fecha: " + fecha + ", estado: " + estado + ", doctor: " + doctor + ", paciente: " + paciente + ", documento: " + documento);

        await fetch("http://localhost:4000/agendar", {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                fecha,
                estado
            }

        })
            .then(response => { return response.json() })
            .catch(error => console.error(error))
            .then(response => console.log(response));

        await fetch("http://localhost:4000/doctor", {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
            }

        })
            .then(response => { return response.json() })
            .catch(error => console.error(error))
            .then(response => console.log(response));

        fetch("http://localhost:4000/registro", {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
            }

        })
            .then(response => { return response.json() })
            .catch(error => console.error(error))
            .then(response => console.log(response[0].nombre));
    }

    return (
        <>
            <nav className='flex'>
                <Link to="/"><h2 className='topmenu'>HOME</h2></Link>
                <Link to="/login"><h1 className='topmenu'>INICIAR</h1></Link>
                <Link to="/register"><h1 className='topmenu'>REGISTRARSE</h1></Link>
                <Link to="/user"><h1 className='topmenu'>USUARIOS</h1></Link>

            </nav>
            <form onSubmit={onSubmit}>
                <Card padding="2rem" flexDirection="column" borderRadius="1rem">
                    <h1>Agenda</h1>
                    <Gap>2rem</Gap>
                    <Input type="Date" onChange={(v) => setFecha(v.target.value)}></Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setDoctor(v.target.value)}>Nombre del Doctor</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setPaciente(v.target.value)}>Nombre del Paciente</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setDocumento(v.target.value)}>Documento</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setEstado(v.target.value)}>Estado</Input>
                    <Gap>2rem</Gap>
                    <Button type="submit"><b>AGENDAR</b></Button>
                </Card>
            </form>
        </>
    )
}
