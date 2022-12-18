import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Card from '../components/utils/Card';
import Gap from '../components/utils/Gap';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

export default function Register() {

    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault()

        const res = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                nombre,
                apellido,
                documento,
                correo,
                contacto,
                direccion,
                fechaDeNacimiento,
                genero,
                usuario,
                clave,
                entidad
            })

        })
        const { message } = await res.json()
        alert(message)
        navigate("/login")
    }

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [contacto, setContacto] = useState("");
    const [direccion, setDireccion] = useState("");
    const [fechaDeNacimiento, setNacimiento] = useState("");
    const [genero, setGenero] = useState("");
    const [usuario, setUsuario] = useState("");
    const [clave, setPassword] = useState("");
    const [entidad, setEntidad] = useState("");


    return (
        <>
            <nav className='navbar navbar-expand-md nav-color py-0'>
                <Link to="/home"><h1 className='topmenu'>Home</h1></Link>
                <Link to="/login"><h1 className='topmenu' id='largeItem'>Iniciar Sesión</h1></Link>
            </nav>
            <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <form action='/welcome'>
                <Gap>2rem</Gap>    
                <Card 
                >
                    <h1>Registrarse</h1>
                    <Gap>2rem</Gap>
                    <Input required onChange={(v) => setNombre(v.target.value)}>Nombre</Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setApellido(v.target.value)}>Apellido</Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setDocumento(v.target.value)}>Documento</Input>
                    <Gap>0.5rem</Gap>
                    <Input required type="email" onChange={(v) => setCorreo(v.target.value)}>Correo</Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setContacto(v.target.value)}>Contacto</Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setDireccion(v.target.value)}>Direccion</Input>
                    <Gap>0.5rem</Gap>
                    <label>Fecha de nacimiento</label>
                    <Input required type="date" onChange={(v) => setNacimiento(v.target.value)}></Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setGenero(v.target.value)}>Genero</Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setUsuario(v.target.value)}>Usuario</Input>
                    <Gap>0.5rem</Gap>
                    <Input required type="password" onChange={(v) => setPassword(v.target.value)}>Contraseña</Input>
                    <Gap>0.5rem</Gap>
                    <Input required onChange={(v) => setEntidad(v.target.value)}>Entidad</Input>
                    <Gap>2rem</Gap>
                    <Button className="btn-btn primary" type="submit" id="largeItem"><b>REGISTRARSE </b></Button>
                </Card>
                </form>
            </form>
        </>
    )
}