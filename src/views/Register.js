import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/utils/Card';
import Gap from '../components/utils/Gap';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

export default function Register() {

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
                <Link to="/"><h1 className='topmenu'>Home</h1></Link>
                <Link to="/login"><h1 className='topmenu' id='largeItem'>Iniciar Sesión</h1></Link>
                <Link to= "/agenda"><h1 className='topmenu'>Agendar</h1></Link>
                
            </nav>
            <form onSubmit={onSubmit}>
                <Gap>2rem</Gap>    
                <Card padding="2rem" flexDirection="colum" borderRadius="1rem">
                    <h1>Registrarse</h1>
                    <Gap>2rem</Gap>
                    <Input onChange={(v) => setNombre(v.target.value)}>nombre</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setApellido(v.target.value)}>Apellido</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setDocumento(v.target.value)}>Documento</Input>
                    <Gap>0.5rem</Gap>
                    <Input type="email" onChange={(v) => setCorreo(v.target.value)}>Correo</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setContacto(v.target.value)}>Contacto</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setDireccion(v.target.value)}>Direccion</Input>
                    <Gap>0.5rem</Gap>
                    <Input type="date" onChange={(v) => setNacimiento(v.target.value)}>Fecha de nacimiento</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setGenero(v.target.value)}>Genero</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setUsuario(v.target.value)}>Usuario</Input>
                    <Gap>0.5rem</Gap>
                    <Input type="password" onChange={(v) => setPassword(v.target.value)}>Contraseña</Input>
                    <Gap>0.5rem</Gap>
                    <Input onChange={(v) => setEntidad(v.target.value)}>Entidad</Input>
                    <Gap>2rem</Gap>
                    <Button type="submit"><b>REGISTRARSE </b></Button>
                </Card>
            </form>
        </>
    )
}