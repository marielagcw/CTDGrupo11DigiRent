import React, { useEffect, useState } from 'react';
import { useFetch } from "../hooks/useFetch";
import Footer from './Footer';
import Header from './Header';
import '../styles/Navbar.css'
import '../styles/Products.css'
import ProductLocation from './ProductLocation';
import ProductGalery from './ProductGalery';
import { useNavigate, Route,useParams,Routes } from 'react-router-dom';
import ProductCharact from './ProductCharact';
import { BsChevronLeft } from 'react-icons/bs';
import ProductPolitics from './ProductPolitics';
import Calendar from 'react-calendar';


export default function Products() {
    const { id } = useParams()
    const [fecha, setfecha] = useState(new Date([]));
    const navigate = useNavigate();

    let url = "http://localhost:8080/productos/1";
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    }
    console.log("Info");
    console.log(data);
    // let data = {};
    // fetch(url).then((res)=>res.json()).then((info)=>{
    //     data = {...info};
    // })
    let {nombre_producto,
        titulo_descripcion,
        descripcion,
        imagenes,
        categorias,
        ciudades,
        caracteristicas,
        politicas} = {...data};

    return (
        <div id='product'>
            <Header />
            <div className='my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3'>
                <div className="title-product">
                    <h3>{categorias[0].titulo}</h3>
                    <h1>{titulo_descripcion}</h1>
                </div>
                <div className='back d-flex justify-content-center allign-items-center' onClick={() => navigate('/')}>
                    <BsChevronLeft />
                </div>
            </div>
            <ProductLocation productInfo={ciudades} />
            <ProductGalery galery={imagenes} />
            <div id='description'>
                <h2 className='description-title title'>Descripción</h2>
                <p className='description-text'>{descripcion}</p>
            </div>
            <ProductCharact caract={caracteristicas} />
            <div id='calendar'>
                <h2>Fechas disponibles</h2>
                <div className='d-flex flex-row justify-content-around align-items-center'>
                    <div className="calendar-container">
                        <Calendar minDate={new Date(Date.now())} showDoubleView={true} selectRange={true} onChange={setfecha} />
                    </div>
                    <div className="button-container">
                        <p>Agregá tus fechas de viajes para obtener precios exactos</p>
                        <button className='btn btn-primary btn-lg btn-max-width'>Iniciar reserva</button>
                    </div>
                </div>
            </div>
            <ProductPolitics politics={politicas} />
            <Footer />
        </div>
    )
}