import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Bienvenida.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>
            <strong>
              <span> MEDICAL SCIENTIFIC COMMUNITY</span>
            </strong>{" "}
          </h1>
          <p>We are glad to have you back in our community</p>
          <img
            alt="MEDICAL SCIENTIFIC COMMUNITY"
            src={require("../assets/img/logomscult.png")}
          ></img>
          <p>National Policy for the Provision of Health Services</p>
          <Button variant="primary" as={Link} to="/home">
            Continuar
          </Button>
          <footer>
            <sub> MCS/Privacy Policy</sub>{" "}
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
