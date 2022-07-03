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



          </div>

          </div>
            

          </div>
          
          {/* <div className="card text-center" style="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> */}
          <Footer />
        </>
      );




}