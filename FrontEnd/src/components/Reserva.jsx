import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import productosEstaticos from '../productos.json';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import ReservaForm from './ReservaForm';
import ReservaDetalle from './ReservaDetalle';
import Calendar from 'react-calendar';
import '../styles/Reserva.css';
import ReservaHoraLlegada from './ReservaHoraLlegada';
import ProductPolitics from './ProductPolitics';
import { useFetch } from '../hooks/useFetch';


export default function Reserva() {
    let ciudades = productosEstaticos.ciudades;
    let productos = productosEstaticos.productos;
    const [fecha, setfecha] = useState(new Date([]));
    const navigate = useNavigate();
    const {productId} = useParams();

    let url = "http://localhost:8080/productos/" + productId;
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    }
    let {
        tituloDescripcion,
        descripcion,
        imagenes,
        categoria,
        ciudad,
        caracteristicas,
        politicas, 
        reservas} = { ...data };

    return(
        localStorage.getItem("jwt")?(
        isPending?<div></div>:
        <div id='reserva'>
            <Header />
            
            <div className='my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3'>
                <div className="title-product">
                    <h3>{categoria.titulo}</h3>
                    <h1>{tituloDescripcion}</h1>
                </div>
                <div className='back d-flex justify-content-center allign-items-center' onClick={()=>navigate('/')}>
                    <BsChevronLeft />
                </div>
            </div>

           

            <div className='reserva-container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-8 col-md-8'>
                        <h2 className='create-acount'>Completá tus datos </h2>
                            <ReservaForm />
                    </div>
                    <div className='col-md-4'>
                        <div id='detalleReserva'>
                            <ReservaDetalle fechas={fecha} />
                        </div>
                    </div>          
                </div>

                
                <div className='row'>
                    <div className='col-md-8'>
                        <div id='calendar'>
                            <h2>Seleccioná tu fecha de reserva</h2>
                            <div className='d-flex flex-row justify-content-around align-items-center'>
                                <div className="calendar-container">
                                <Calendar minDate={new Date(Date.now())} showDoubleView={true} selectRange={true} onChange={setfecha} />
                                </div>
                            </div>
                    
                        </div>

                    </div>

                
                    
                </div>


                <div className='row'>
                    <div className='col-md-8'>
                        <div id='horaLlegada'>
                        <h2>Tu horario de llegada</h2>
                        <ReservaHoraLlegada />           
                        </div>
                    </div>


                </div>
            </div>

                <div className='row'>
                    <div id='resPolitica'>
                        <ProductPolitics politics={politicas}/> 
                    </div>


                </div>

            
            <Footer />
        </div>
        
        ): <Navigate to="/login" replace={true} />
    )
}

