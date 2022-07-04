import Header from "./Header";
import Footer from "./Footer";
import "../styles/TemplateProductoExitosa.css";

export default function ProductoForm() {
  return (
    <>
      <Header />
      <div id="prodexitosa-container">
        <div className="templateproducto text-center">
          <div className="templprod-body">Confirmación alta producto</div>
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
