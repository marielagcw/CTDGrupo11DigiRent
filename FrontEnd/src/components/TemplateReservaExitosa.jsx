import Header from "./Header";
import Footer from "./Footer";
import "../styles/TemplateReservaExitosa.css"
// import { Navigate } from 'react-router-dom';

export default function Reserva() {
    
    // const navigate = useNavigate();

    return (
        <>
          <Header />
          <div id="resexitosa-container">
          <div className="templatereserva text-center">
          <div className="templ-body">
            <div id="textocentrado">
            <h5 className="templ-title">¡Muchas gracias!</h5>
            <p  className="templ-text">
              Su reserva se ha realizado con éxito.
            </p>
            
            <a href="#" className="btn btn-primary btn-lg">
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