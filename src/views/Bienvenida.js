import Button from '../components/forms/Button';
import './Bienvenida.css';

function App() {
  return (
    <>
      <form action="/">
        <div className="App">
          <div className="App-header">
            <h1><strong><span> MEDICAL SCIENTIFIC COMMUNITY</span></strong> </h1>
            <p>We are glad to have you back in our community</p>
            <img src={require("../assets/img/logomscult.png")}></img>
            <p>National Policy for the Provision of Health Services</p>
            <Button type="submit">Continuar</Button>
            <footer><sub> MCS/Privacy Policy</sub> </footer>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
