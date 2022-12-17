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
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                user,
                password
            }

        })
        const { message } = await res.json()
        alert(message)
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <nav className='navbar navbar-expand-md nav-color py-0'>
                <Link to="/"><h2 className='topmenu'>HOME</h2></Link>
                <Link to="/register"><h1 className='topmenu' id='largeItem'>REGISTRARSE</h1></Link>
                <Link to="/user"><h1 className='topmenu'>USUARIOS</h1></Link>
                <Link to= "/agenda"><h1 className='topmenu'>AGENDAR</h1></Link>
            </nav>
            <form onSubmit={onSubmit}>
                <Card padding="2rem" flexDirection="colum" borderRadius="1rem">
                    <h1>Iniciar como cliente</h1>
                    <Gap>2rem</Gap>
                    <Input onChange={(v) => setUser(v.target.value)}>User Name</Input>
                    <Gap>0.5rem</Gap>
                    <Input type="password" onChange={(v) => setPassword(v.target.value)}>Contraseña</Input>
                    <Gap>2rem</Gap>
                    <Button type="submit"><b>INGRESAR </b></Button>
                </Card>
            </form>
        </>
    )

}