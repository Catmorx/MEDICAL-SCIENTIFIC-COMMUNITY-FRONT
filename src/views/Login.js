import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/utils/Card";
import Gap from "../components/utils/Gap";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";
import Logo from "../assets/img/logo.jpg";

export default function Login() {
  const [usuario, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario,
        password,
      }),
    });
    const { message } = await res.json();
    if (message === "Bienvenido")
      navigate("/welcome")
    alert(message);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
        className="navbar navbar-expand-md nav-color py-0"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
        <nav className="navbar navbar-expand-md nav-color py-0">
          <Link to="/">
            <h1 className="topmenu">Home</h1>
          </Link>
          <Link to="/register">
            <h1 className="topmenu" id="largeItem">
              Registrarse
            </h1>
          </Link>
        </nav></div>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Gap>2rem</Gap>
        <Card>
          <h1>Iniciar sesión</h1>
          <Gap>2rem</Gap>
          <Input required onChange={(v) => setUser(v.target.value)}>Usuario</Input>
          <Gap>0.5rem</Gap>
          <Input required type="password" onChange={(v) => setPassword(v.target.value)}>
            Contraseña
          </Input>
          <Gap>2rem</Gap>
          <Button type="submit">
            <b>INGRESAR </b>
          </Button>
        </Card>
      </form>
    </>
  );
}

