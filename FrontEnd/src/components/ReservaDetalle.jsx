import axios from "axios";
import React, {useEffect,useState} from "react";
// import {Navigate, useNavigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import '../styles/ReservaDetalle.css';
// import detalle from '../productos.json';


const ReservaDetalle = ({ fechas, hora, productId}) => {
    const urlBase = process.env.REACT_APP_URLBASE
    const user = JSON.parse(window.localStorage.getItem('user'))
    const jwt = JSON.parse(window.localStorage.getItem('jwt')).jwt

    // let detalleReserva = detalle.detalle;
    // const navigate = useNavigate();

    const realizarReserva = async () => {
        console.log("jwt reserva " + jwt)
        if(render === true){

            let fechaInicialFormateada = `${formatDate(fechas[0]).slice(6)}-${formatDate(fechas[0]).slice(3,5)}-${formatDate(fechas[0]).slice(0,2)}`
            let fechaFinalFormateada = `${formatDate(fechas[1]).slice(6)}-${formatDate(fechas[1]).slice(3,5)}-${formatDate(fechas[1]).slice(0,2)}`


            
                       
            
            const url = `${urlBase}/reservas/agregar`
            const config = {
                headers: {
                    Authorization:
                    "Bearer " + jwt,
                    "Content-Type": "application/json",
                    mode: "no-cors",
                },
              };
            const body = {
                horaInicio: hora,
                fechaInicial: fechaInicialFormateada,
                fechaFinal: fechaFinalFormateada,
                producto:{
                    id:parseInt(productId)
                },
                usuario:{
                    id:user.id
                }
            }
            console.log(body);
            await axios.post(url, body,config)

            navigate('/confirmacionReservaExitosa')
        }
    }


    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    const navigate = useNavigate();

    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }

    const [render, setRender] = useState(false)

    useEffect(() => {
        if (fechas!= null && fechas.length > 0) {
            setRender(true);
        }else{
            setRender(false);
        }

    }, [fechas])
    

    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Detalle de la reserva</h2>
                <div id="imgdetalle">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" className="imagendetalle" alt="" />
                </div>
                <div className="informacionReserva m-3">
                    <h6 className="categoriaReserva">Cabañas</h6>
                    <h3 className='titleReserva'>"Cabaña en montaña"</h3>

                    <h6 className='ubicacionReserva'>UBICACION</h6>
                    <hr/>
                    {!render  ?
                    <h5 className='entradaReserva'>Chek-in: </h5>:
                    <h5 className='entradaReserva'>Chek-in:  {formatDate(fechas[0])}</h5>}
                    <hr/>
                    {!render ?
                    <h5 className='entradaReserva'>Chek-Out: </h5>:
                    <h5 className='entradaReserva'>Chek-Out:  {formatDate(fechas[1])}</h5>}
                    <hr/>
                    <div className="containerReservaConf">
                        <button className='btn btn-primary btn-lg btn-max-width' onClick={realizarReserva}>Confirmar reserva</button>
                    </div>
                    
                    



                </div>

            </div>
        </>
    )

}


export default ReservaDetalle;