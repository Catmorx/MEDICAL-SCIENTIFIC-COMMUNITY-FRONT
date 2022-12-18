import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/utils/Card';
import Gap from '../components/utils/Gap';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

export default function Login() {

    async function onSubmit(e) {
        e.preventDefault()

        const res = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            ,body:JSON.stringify({
                usuario,
                password
            })

        })
        const { message } = await res.json()
        alert(message)
    }

    const [usuario, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <nav className='navbar navbar-expand-md nav-color py-0'>
                <Link to="/home"><h1 className='topmenu'>Home</h1></Link>
                <Link to="/register"><h1 className='topmenu' id='largeItem'>Registrarse</h1></Link>
            </nav>
            <form  onSubmit={onSubmit}  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <form action="/welcome">
                <Gap>2rem</Gap>
                <Card 
                >
                    <h1>Iniciar sesión</h1>
                    <Gap>2rem</Gap>
                    <Input required onChange={(v) => setUser(v.target.value)}>Usuario</Input>
                    <Gap>0.5rem</Gap>
                    <Input required type="password" onChange={(v) => setPassword(v.target.value)}>Contraseña</Input>
                    <Gap>2rem</Gap>
                    <Button type="submit"><b>INGRESAR</b></Button>
                </Card>
            </form></form>
        </>
    )

}