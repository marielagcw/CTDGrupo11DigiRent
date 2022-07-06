import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import "../styles/TemplateReservaExitosa.css"

export default function Reserva() {
    const navigate = useNavigate();

    return (
        <>
          <Header />
          <div id="resexitosa-container">
          <div className="templatereserva text-center">
          <div className="templ-body">
            <div id="textocentrado">
              <div className="icono-estilo">
              <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h5 className="templ-title">¡Muchas gracias!</h5>
              <p  className="templ-text">
                Su reserva se ha realizado con éxito.
            </p>
            
            <a href="#" className="btn btn-primary btn-lg" onClick={()=>navigate('/')}>
              Ok
            </a>

            </div>
            
          </div>
          </div> 
          </div>
          <Footer />
        </>
      );




}