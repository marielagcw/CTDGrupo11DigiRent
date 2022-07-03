import React from 'react';
import horas from "../productos.json";
import '../styles/ReservaHoraLlegada.css';


const ReservaHoraLlegada = () =>{

    //Array horas
    let horasList = horas.horas;


    return (
        <>
            <div className="card producto mb-3" >
                <div className='iconoCheck'>
                    <span>Tu habitacion va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</span>
                </div>
                <label className="horario" htmlFor='horario llegada'>Indica tu horario estimado de llegada</label>
                    <div className="horaInput"> 
                        <input className='input-search' type="text" list="horas" placeholder='Seleccionar hora de llegada' name='horaImput'/> 

                    </div> 
                    <datalist id="horas">
                        {horasList.map((e, i) =>
                            <option fecha={e} key={"horaImput_" + i} >{e}</option>
                        )}
                    </datalist>
            </div>
            







        </>







    )



}


export default ReservaHoraLlegada;
