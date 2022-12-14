import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Gap from '../components/utils/Gap';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import Logo from "../assets/img/logo.jpg"
import { API_URL } from '../config';

export default function Register() {

    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault()

        const res = await fetch(API_URL + "/register", {
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "0rem"
                }}
                className="navbar navbar-expand-md nav-color py-0"
            >
                <div className="navbar-brand py-0">
                    <Link to="/">
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
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Iniciar Sesi??n
                                    </Link>
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
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Gap>2rem</Gap>
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
                <Input type="number" required onChange={(v) => setContacto(v.target.value)}>Contacto</Input>
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
                <Input required type="password" onChange={(v) => setPassword(v.target.value)}>Contrase??a</Input>
                <Gap>0.5rem</Gap>
                <Input required onChange={(v) => setEntidad(v.target.value)}>Entidad</Input>
                <Gap>2rem</Gap>
                <Button className="btn-btn primary" type="submit" id="largeItem"><b>REGISTRARSE </b></Button>
            </form>
        </>
    )
}