import React from "react";
// import {Navigate, useNavigate} from 'react-router-dom';
import '../styles/ReservaDetalle.css';
import detalle from '../productos.json';


const ReservaDetalle = () =>{
    let detalleReserva = detalle.detalle;
    // const navigate = useNavigate();

    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Detalle de la reserva</h2>
                <div id="imgdetalle">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" className="imagendetalle" alt="" />
                </div>
                <div>

                </div>
                
                {/* <div className="card-body ">
                    <h3 className='title'>{info.title}</h3>
                    <h4 className='category'>{info.category}</h4>
                    <h5 className='location'>{info.location}</h5>
                    <p className="card-text description">{info.description}</p>
                    <button type="button" className="btn btn-primary" onClick={()=>navigate('/products')}>Confirmar Reserva</button>
                </div> */}
                
            </div>
        </>
    )

}


export default ReservaDetalle;