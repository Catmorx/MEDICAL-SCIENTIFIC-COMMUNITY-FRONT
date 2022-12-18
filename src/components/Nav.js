import { Link } from "react-router-dom";
import Logo from "./../assets/img/logo.jpg";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md nav-color py-0">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll bs-scroll-height">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Planes de salud
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Drogueria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Centros de salud
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-brand py-0">
          <img
            src={Logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
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
  );
};
