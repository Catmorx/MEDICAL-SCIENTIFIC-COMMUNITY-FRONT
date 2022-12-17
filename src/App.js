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

import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/user" element={<Users></Users>}></Route>
                    <Route path="/user/:name" element={<User></User>}></Route>
                    <Route path="/agenda" element={<Agenda />}></Route>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
