import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/utils/Card";
import Gap from "../components/utils/Gap";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";
import Logo from "../assets/img/logo.jpg";
import { API_URL } from "../config";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { token, setCookies } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usuario, setUser] = useState("");
  const [password, setPassword] = useState("");


  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario,
        password,
      }),
    });
    const { message, token } = await res.json();
    if (message === "Bienvenido") {
      setCookies("token", token, { path: "/", maxAge: 7 * 24 * 60 * 60 })
      alert(message);
      navigate("/welcome")
    }
  }
  useEffect(() => {
    (() => {
      if (token) {
        navigate("/home");
      }
    })();
  });
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
          <img
            src={Logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
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
                  <Link className="nav-link" to="/register">
                    Registrarse
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
      <div style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "0rem"
      }}>
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
      </div>
    </>
  );
}

