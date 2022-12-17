import { Nav } from "../components/Nav";

export const LandingPage = () => {
  return (
    <>
      <Nav />
      <section className="main">
        <div className="container">
          <h1>AYUDA EN LINEA</h1>
          <h2>24/7</h2>
          <button className="btn btn-primary">REGISTRARSE</button>
        </div>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-3 bg-primary bg-opacity-50">
                SERVICIOS Conoce los diferentes servicios a los que puedes
                acceder siendo cliente.
              </div>
              <div className="col-3 bg-primary bg-opacity-50">hello</div>
              <div className="col-3 bg-primary bg-opacity-50">hello</div>
              <div className="col-3 bg-primary bg-opacity-50">hello</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
