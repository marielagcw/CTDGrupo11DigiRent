import React from "react";
import "../styles/ProductPolitics.css";

export default function ProductPolitics({ politics }) {
  const clasificacionTitulo = (pol) => {
    switch (pol) {
      case "1":
        return "Normas de la casa";
      case "2":
        return "Salud y seguridad";
      case "3":
        return "Política de cancelación";
      default:
        return "Políticas"
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
              <h4 id="titulo-politicas">{clasificacionTitulo(pol.titulo[0])}</h4>
              <ul className="pol-ul d-flex flex-column justify-content-around allign-items-ceter">
                {politics.map((pol, i) => {
                  return (
                    <li id="elem-politicas" key={"pol_" + i}>
                      {pol.titulo.slice(1, pol.length)}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
