import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Input from '../components/forms/Input';
import Gap from '../components/utils/Gap';
import Button from '../components/forms/Button';
import "../assets/Agenda.css"
import Card from '../components/utils/Card';


export default function Agenda() {
    const [fecha, setFecha] = useState("");
    const [estado, setEstado] = useState("");
    const [doctor, setDoctor] = useState("");
    // const [paciente, setPaciente] = useState("");
    // const [documento, setDocumento] = useState("");


    async function onSubmit(e) {
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
                doctorName: doctor
            })

        })
            .then(response => { return response.json() })
            .catch(error => console.error(error))
            .then(response => {
                console.log(response);
                e.target.reset()
            });
    }

    return (
        <>
            <nav className='navbar navbar-expand-md nav-color py-0'>
                <Link to="/"><h1 className='topmenu'>Home</h1></Link>
            </nav>
            <form className='now' onSubmit={onSubmit}>
                <Gap>2rem</Gap> 
                <div class="position-relative">
                    <div className="position-absolute bottom-25 end-50">
                        <Gap>2rem</Gap>
                        <h1>Agenda</h1>
                        <Gap>2rem</Gap>
                        <Input id="fecha" type="date" onChange={(v) => setFecha(v.target.value)}></Input>
                        <Gap>0.5rem</Gap>
                        <Input onChange={(v) => setDoctor(v.target.value)}>Nombre del Doctor</Input>
                        <Gap>2rem</Gap>
                        <Button type="submit"><b>AGENDAR</b></Button>
                        <Gap>2rem</Gap>
                    </div>
                </div>
            </form>
        </>
    )
}
