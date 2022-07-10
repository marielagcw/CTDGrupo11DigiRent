import React from "react";
import "../styles/ProductCharact.css";
/* -------------------------- Importación de íconos ------------------------- */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

export default function ProductCharact({ caract }) {
  return (
    <div id="charact">
      <h2 className="charact-title title">¿Que ofrece este lugar?</h2>
      <hr className="char-hr" />
      <div className="char-grid">
        {caract.map((car, i) => {
          return (
            <div key={"car" + i} className="grid-item">
              <FontAwesomeIcon icon={icons[`fa${car.icono}`]} />
              <span className="ms-2">{car.nombre}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
