/* import { useState } from "react";
import LoginClient from "./views/LoginClient"
import Button from "./components/forms/Button"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import User from "./views/User";
import { LandingPage } from "./views/LandingPage";
import Login from "./views/Login";
import Users from "./views/Users";
import Register from "./views/Register";
import Agenda from "./views/Agenda";
import Bienvenida from "./views/Bienvenida";

import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/user" element={<Users />}></Route>
                    <Route path="/user/:name" element={<User />}></Route>
                    <Route path="/agenda" element={<Agenda />}></Route>
                    <Route path="/bienvenida" element={<Bienvenida />}></Route>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
