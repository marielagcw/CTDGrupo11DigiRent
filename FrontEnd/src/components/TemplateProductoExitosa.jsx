import Header from "./Header";
import Footer from "./Footer";
import {useNavigate } from 'react-router-dom';
import "../styles/TemplateProductoExitosa.css";


export default function ProductoForm() {
    const navigate = useNavigate();

    return (
        <>
          <Header />
          <div id="prodexitosa-container">
          <div className="templateproducto text-center">
          <div className="templprod-body">
            <div id="textoproducto">
            <p  className="templprod-text">
              Tu propiedad se ha creado con éxito.
            </p>
            <a href="#" className="btn btn-primary btn-lg" onClick={()=>navigate('/')}
>
              volver
            </a>

            </div>
            
          </div>
          </div>   
          </div>
          <Footer />
        </>
      );

    


}