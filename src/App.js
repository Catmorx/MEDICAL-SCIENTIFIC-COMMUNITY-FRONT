import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "./views/LandingPage";
import Home from "./views/Home";
import Login from "./views/Login";
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
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/welcome" element={<Bienvenida />}></Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
