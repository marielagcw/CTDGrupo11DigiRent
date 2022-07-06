import React from "react";
import horas from "../productos.json";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import "../styles/ReservaHoraLlegada.css";

const ReservaHoraLlegada = ({setHora}) => {
  //Array horas
  let horasList = horas.horas;

  const elegirHora = (e) => {
    //setHora(e.value)
    let horaSeleccionada = e.target.value
    let horaFormateada = ''
    if(horaSeleccionada.length === 8){
        horaFormateada = `${horaSeleccionada.slice(0,5)}:00`
        setHora(horaFormateada)
    }
  }

  return (
    <>
      <div className="card producto mb-3">
        <div className="iconoTexto">
          
          <span className="estilo-ckeck">
          <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>Tu habitacion va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</span>
        </div>
        <label className="horario" htmlFor="horario llegada">
          Indica tu horario estimado de llegada
        </label>
        <div className="horaInput">
          <input onChange={elegirHora}
            className="input-search"
            type="text"
            list="horas"
            placeholder="Seleccionar hora de llegada"
            name="horaImput"
          />
        </div>
        <datalist id="horas"  >
          {horasList.map((e, i) => (
            <option fecha={e}  key={"horaImput_" + i}>
              {e}
            </option>
          ))}
        </datalist>
      </div>
    </>
  );
};

export default ReservaHoraLlegada;
