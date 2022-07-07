import React from "react";
import horas from "../productos.json";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
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
    window.innerWidth <= 1023 ? (<>
      <div id="horario-llegada-mob" className="card producto mb-3">
        <div className="iconoTexto-mob">
          
          <div className="estilo-ckeck-mob">
          <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div id="texto-check-mob">Tu habitacion va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</div>
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
    </>) :
    (<>
      <div id="horario-llegada" className="card producto mb-3">
        <div className="iconoTexto">
          
          <div className="estilo-ckeck">
          <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div id="texto-check">Tu habitacion va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</div>
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
    </>)
  );
};

export default ReservaHoraLlegada;
