import React from "react";

import { IconContext } from "react-icons";
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

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-md-3 text-center">
          <button className="btn btn-light bg-transparent">
            <IconContext.Provider value={{ size: "70%" }}>
              <FaRegCalendarAlt />
            </IconContext.Provider>
          </button>
          <span className="fw-bolder">Agendar Citas</span>
        </div>
        <div className="col-3 col-md-3 text-center">
          <button className="btn btn-light bg-transparent">
            <IconContext.Provider value={{ size: "70%" }}>
              <FaRegCalendarCheck />
            </IconContext.Provider>
          </button>
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
  );
}
export default Home;
