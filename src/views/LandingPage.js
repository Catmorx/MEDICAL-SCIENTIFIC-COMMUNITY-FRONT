import { IconContext } from "react-icons";
import {
  FaCheckDouble,
  FaHandHoldingHeart,
  FaFileMedical,
  FaRegCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";
import { Nav } from "../components/Nav";

export const LandingPage = () => {
  return (
    <>
      <Nav />
      <section className="main">
        <div className="container">
          <div
            style={{
              float: "left",
              margin: "4rem",
            }}
            className="d-flex justify-content-center align-items-center flex-column text-primary"
          >
            <IconContext.Provider
              value={{ size: "10%", color: "white", className: "mt-2" }}
            >
              <FaCheckDouble />
            </IconContext.Provider>
            <h1 className="fw-bolder">AYUDA EN LINEA</h1>
            <h2 className="fw-bolder">24/7</h2>
            <button className="btn btn-primary">REGISTRARSE</button>
          </div>
        </div>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-3 bg-primary bg-opacity-50">
                <div className="d-flex justify-content-center align-items-center flex-column text-light  ">
                  <IconContext.Provider
                    value={{ size: "50%", color: "white", className: "mt-2" }}
                  >
                    <FaHandHoldingHeart />
                  </IconContext.Provider>
                  <span className="fw-bolder mt-2">SERVICIOS</span>
                  <p style={{ textAlign: "center" }}>
                    Conoce los diferentes servicios a los que puedes acceder
                    siendo cliente.
                  </p>
                </div>
              </div>
              <div className="col-3 bg-primary bg-opacity-50">
                <div className="d-flex justify-content-center align-items-center flex-column text-light  ">
                  <IconContext.Provider
                    value={{ size: "35%", color: "white", className: "mt-2" }}
                  >
                    <FaFileMedical />
                  </IconContext.Provider>
                  <span className="fw-bolder mt-2">HISTORIAL CLINICO</span>
                  <p style={{ textAlign: "center" }}>
                    Si eres clientes puedes acceder a tu registro clinico.
                    Olvidate de hacer tanto papeleo.
                  </p>
                </div>
              </div>
              <div className="col-3 bg-primary bg-opacity-50">
                <div className="d-flex justify-content-center align-items-center flex-column text-light">
                  <IconContext.Provider
                    value={{ size: "40%", color: "white", className: "mt-2" }}
                  >
                    <FaRegCalendarAlt />
                  </IconContext.Provider>
                  <span className="fw-bolder mt-2">AGENDA AQUI</span>
                  <p style={{ textAlign: "center" }}>
                    Con un toque agendas tu cita. Ya no perderas tiempo en una
                    llamada para agendar tu cita.
                  </p>
                </div>
              </div>
              <div className="col-3 bg-primary bg-opacity-50">
                <div className="d-flex justify-content-center align-items-center flex-column text-light  ">
                  <IconContext.Provider
                    value={{ size: "45%", color: "white", className: "mt-2" }}
                  >
                    <FaCommentDots />
                  </IconContext.Provider>
                  <span className="fw-bolder mt-2">COMENTARIOS</span>
                  <p style={{ textAlign: "center" }}>
                    Tu opinion es muy importante para nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
