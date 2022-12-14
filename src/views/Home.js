import React, { useContext } from "react";
import { IconContext } from "react-icons";
import Logo from "./../assets/img/logo.jpg";
import {
  FaRegCalendarAlt,
  FaRegCalendarCheck,
  FaChartBar,
  FaBookMedical,
  FaAddressCard,
  FaLaptop,
  FaPills,
  FaRegCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/forms/Button";

function Home() {
  
  const {token, logout} = useContext(AuthContext);
  return (
    <>
      <nav className='navbar navbar-expand-md nav-color py-0'>
        {token && (
            <Button variant="secondary" onClick={logout}>
              Cerrar Sesión
            </Button>
          )}
        <Link 
        to="/home"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "0rem"
        }}
        >
          <img
            src={Logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
      </nav>
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="row">
          <div className="col-3 col-md-3 text-center">
            <Link to="/agenda" >
              <button className="btn btn-light bg-transparent">
                <IconContext.Provider value={{ size: "70%" }}>
                  <FaRegCalendarAlt />
                </IconContext.Provider>
              </button>
            </Link>
            <span className="fw-bolder">Agendar Citas</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <Link to="/agenda">
              <button className="btn btn-light bg-transparent">
                <IconContext.Provider value={{ size: "70%" }}>
                  <FaRegCalendarCheck />
                </IconContext.Provider>
              </button>
            </Link>
            <span className="fw-bolder">Tus Citas</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <button className="btn btn-light bg-transparent">
              <IconContext.Provider value={{ size: "80%" }}>
                <FaChartBar />
              </IconContext.Provider>
            </button>
            <span className="fw-bolder">Descargar Resultados</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <button className="btn btn-light bg-transparent">
              <IconContext.Provider value={{ size: "70%" }}>
                <FaBookMedical />
              </IconContext.Provider>
            </button>
            <span className="fw-bolder">Consultas Medicas</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <button className="btn btn-light bg-transparent">
              <IconContext.Provider value={{ size: "70%" }}>
                <FaAddressCard />
              </IconContext.Provider>
            </button>
            <span className="fw-bolder">Datos Personales</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <button className="btn btn-light bg-transparent">
              <IconContext.Provider value={{ size: "80%" }}>
                <FaLaptop />
              </IconContext.Provider>
            </button>
            <span className="fw-bolder">Video Consulta</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <button className="btn btn-light bg-transparent">
              <IconContext.Provider value={{ size: "72%" }}>
                <FaPills />
              </IconContext.Provider>
            </button>
            <span className="fw-bolder">Recetas</span>
          </div>
          <div className="col-3 col-md-3 text-center">
            <button className="btn btn-light bg-transparent">
              <IconContext.Provider value={{ size: "65%" }}>
                <FaRegCommentDots />
              </IconContext.Provider>
            </button>
            <span className="fw-bolder">Mensajes</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
