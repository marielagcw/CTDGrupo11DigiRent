import React from "react";
import "../styles/ProductPolitics.css";

export default function ProductPolitics({ politics }) {
  const clasificacionTitulo = (pol) => {
  const tipoPolitica = pol.titulo.split(".");
    console.log(pol)
    switch (tipoPolitica[0]) {
      case "1":
        return {
          titulo: "Normas de la casa",
          elemento: tipoPolitica[1]
        };
      case "2":
        return {
          titulo: "Salud y seguridad",
          elemento: tipoPolitica[1]
        };
      case "3":
        return {
          titulo: "Política de cancelación",
          elemento: tipoPolitica[1]
        };
      default:
        break;
    }
  };

  return (
    <div id="politics">
      <h2 className="politics-title title">¿Que tenes que saber?</h2>
      <hr className="pol-hr" />
      <div className="pol-grid">
        {politics.map((pol, i) => {
          return (
            <div key={"pol_title_" + i}>
              <h4 id="titulo-politicas">{clasificacionTitulo(pol).titulo}</h4>
              <ul className="pol-ul d-flex flex-column justify-content-around allign-items-ceter">
                <li id="elem-politicas" key={"pol_" + i}>
                  {clasificacionTitulo(pol).elemento}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
