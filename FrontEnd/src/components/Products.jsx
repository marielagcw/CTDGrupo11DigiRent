import React, { useEffect, useState } from 'react';
import { useFetch } from "../hooks/useFetch";
import Footer from './Footer';
import Header from './Header';
import '../styles/Navbar.css'
import '../styles/Products.css'
import ProductLocation from './ProductLocation';
import ProductGalery from './ProductGalery';
import { useNavigate, Route, useParams, Routes } from 'react-router-dom';
import ProductCharact from './ProductCharact';
import { BsChevronLeft } from 'react-icons/bs';
import ProductPolitics from './ProductPolitics';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Spinner from './Spinner';
import ProductMap from './ProductMap';


const urlBase = process.env.REACT_APP_URLBASE;

export default function Products() {

    const { id } = useParams()
    const [fecha, setfecha] = useState(new Date([]));
    const navigate = useNavigate();

    let url = urlBase + "/productos/" + id;
    let config = {
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      };
    let { data, isPending, error } = useFetch(url, config);
    if (isPending) {
        console.log(error);
    }
    let {
        nombreProducto,
        tituloDescripcion,
        descripcion,
        imagenes,
        categoria,
        ciudad,
        caracteristicas,
        politicas, 
        reservas} = { ...data };

    const [path, setPath] = useState({path:''})

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        setPath(location.pathname);
    }, [])
    
    return (
        <div id='product'>
            <Header path={path} />
            <div className='my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3'>
                <div className="title-product">
                    {isPending ? <Spinner /> :
                        <>
                            <h3 className='tituloFondoVerde'>{categoria.titulo}</h3>
                            <h1 className='tituloFondoVerde'>{tituloDescripcion}</h1>
                        </>}
                </div>
                <div className='back d-flex justify-content-center allign-items-center' onClick={() => navigate('/')}>
                    <BsChevronLeft />
                </div>
            </div>
            {isPending ? <Spinner /> : <ProductLocation productInfo={ciudad} />}
            {isPending ? <Spinner /> : <ProductGalery galery={imagenes} />}
            <div id='description'>
                <h2 className='description-title title'>Descripción</h2>
                {isPending ? <Spinner /> : <p className='description-text'>{descripcion}</p>}
            </div>
            {isPending ? <Spinner /> : <ProductCharact caract={caracteristicas} />}
            <div id='calendar'>
                <h2>Fechas disponibles</h2>
                <div id="si" className='d-flex flex-row justify-content-around align-items-center'>
                    <div className="calendar-container">
                    {window.innerWidth >= 359 && window.innerWidth <= 736 ? <Calendar minDate={new Date(Date.now())} showDoubleView={false} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />:<Calendar minDate={new Date(Date.now())} showDoubleView={true} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />}
                    </div>
                    <div className="button-container">
                        <p>Agregá tus fechas de viajes para obtener precios exactos</p>
                        <button id="btn-iniciar-reserva" className='btn btn-primary btn-lg btn-max-width' onClick={()=>navigate(`/reserva/${id}`)}>Iniciar reserva</button>
                    </div>
                </div>
            </div>
            {isPending ? <Spinner /> : <ProductMap />}
            {isPending ? <Spinner /> : <ProductPolitics politics={politicas} />}
            <Footer />
        </div>
    )
}
