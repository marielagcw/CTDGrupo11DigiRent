import Header from "./Header";
import Footer from "./Footer";
import "../styles/TemplateProductoExitosa.css";


export default function ProductoForm() {
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
            <a href="#" className="btn btn-primary btn-lg">
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