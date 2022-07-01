import React from "react";
import "../styles/ProductCharact.css";
/* -------------------------- Importación de íconos ------------------------- */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCookieBite, faSnowflake, faCar, faSwimmingPool, faTv, faWifi, faHotel } from "@fortawesome/free-solid-svg-icons";

export default function ProductCharact({ caract }) {
  const switchIconos = (char) => {

    switch (char.icono) {
                case 'Cocina':
                    return faCookieBite
                case 'Televisor':
                    return faTv;
                case 'Aire Acondicionado':
                    return faSnowflake;
                case 'Mascotas':
                    return faDog;
                case 'Estacionamiento':
                    return faCar;
                case 'Pileta':
                    return faSwimmingPool;
                case 'Wifi':
                    return faWifi;
                default:
                    return faHotel;
            }
  };
  return (
    <div id="charact">
      <h2 className="charact-title title">¿Que ofrece este lugar?</h2>
      <hr className="char-hr" />
      <div className="char-grid">
        {caract.map((char, i) => {
          console.log(char);
          return (
            <div key={"char_item_" + i} className="grid-item">
              <FontAwesomeIcon icon={switchIconos(char)} />
              <span className="ms-2">{char.nombre}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// let caractetisticas = [
//     { nombre: 'Cocina', 'icon': <TbToolsKitchen />, render: false },
//     { nombre: 'Televisor', icon: <CgScreen />, render: false },
//     { nombre: 'Aire Acondicionado', icon: <BsSnow3 />, render: false },
//     { nombre: 'Apto p/ Mascotas', icon: <MdPets />, render: false },
//     { nombre: 'Estacionamiento gratuito', icon: <FaCar />, render: false },
//     { nombre: 'Pileta', icon: <MdPool />, render: false },
//     { nombre: 'Wifi', icon: <BsWifi />, render: false }
// ];
// caract.forEach((e) => {
//     switch (e.nombre) {
//         case 'Cocina':
//             caractetisticas[0].render = e.estaDisponible;
//             break;
//         case 'Televisor':
//             caractetisticas[1].render = e.estaDisponible;
//             break;
//         case 'Aire Acondicionado':
//             caractetisticas[2].render = e.estaDisponible;
//             break;
//         case 'Apto p/ Mascotas':
//             caractetisticas[3].render = e.estaDisponible;
//             break;
//         case 'Estacionamiento gratuito':
//             caractetisticas[4].render = e.estaDisponible;
//             break;
//         case 'Pileta':
//             caractetisticas[5].render = e.estaDisponible;
//             break;
//         case 'Wifi':
//             caractetisticas[6].render = e.estaDisponible;
//             break;
//         default:
//             break;
//     }
// })
