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
import Spinner from './Spinner';


export default function Products() {

    const { id } = useParams()
    const [fecha, setfecha] = useState(new Date([]));
    const navigate = useNavigate();

    let url = "http://localhost:8080/productos/" + id;
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


    return (
        <div id='product'>
            <Header />
            <div className='my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3'>
                <div className="title-product">
                    {isPending ? <Spinner /> :
                        <>
                            <h3>{categoria.titulo}</h3>
                            <h1>{tituloDescripcion}</h1>
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
                    {window.innerWidth >= 414 && window.innerWidth <= 736 ? <Calendar minDate={new Date(Date.now())} showDoubleView={false} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />:<Calendar minDate={new Date(Date.now())} showDoubleView={true} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />}
                    </div>
                    <div className="button-container">
                        <p>Agregá tus fechas de viajes para obtener precios exactos</p>
                        <button id="btn-iniciar-reserva" className='btn btn-primary btn-lg btn-max-width' onClick={()=>navigate(`/reserva/${id}`)}>Iniciar reserva</button>
                    </div>
                </div>
            </div>
            {isPending ? <Spinner /> : <ProductPolitics politics={politicas} />}
            <Footer />
        </div>
    )
}