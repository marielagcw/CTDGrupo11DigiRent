import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/Navbar.css'
import '../styles/Products.css'
import productosEstaticos from '../productos.json';
import ProductLocation from './ProductLocation';
import ProductGalery from './ProductGalery';
import { useNavigate } from 'react-router-dom';
import ProductCharact from './ProductCharact';
import { BsChevronLeft } from 'react-icons/bs';
import ProductPolitics from './ProductPolitics';
import Calendar from 'react-calendar';


export default function Products() {
    let ciudades = productosEstaticos.ciudades;
    let productos = productosEstaticos.productos;
    const [fecha, setfecha] = useState(new Date([]));
    const navigate = useNavigate();



    return (
        <div id='product'>
            <Header />

            <div className='my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3'>
                <div className="title-product">
                    <h3>{productos[0].category}</h3>
                    <h1>{productos[0].title}</h1>
                </div>
                <div className='back d-flex justify-content-center allign-items-center' onClick={() => navigate('/')}>
                    <BsChevronLeft />
                </div>
            </div>
            <ProductLocation productInfo={productos[0].location} />
            <ProductGalery galery={productos} />
            <div id='description'>
                <h2 className='description-title title'>Descripción</h2>
                <p className='description-text'>{productos[0].description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minus perferendis laborum ut distinctio eveniet vero? Ratione totam distinctio dolorem obcaecati dolorum, eos inventore! Porro ex magni asperiores laudantium? Aliquam?
                    Dolorem temporibus, cumque praesentium tempora cupiditate nulla reiciendis error facilis expedita maxime fuga ullam quisquam suscipit. Dolore error, consectetur sapiente dignissimos illo illum rem quia voluptatem consequuntur dolores, repellat obcaecati?
                    Optio, saepe mollitia inventore possimus debitis, porro molestias, suscipit quis deleniti voluptates dolorem quas facere amet esse repudiandae vitae officia nulla minus dolore assumenda cupiditate labore? Nemo repellendus repellat soluta.</p>
            </div>
            <ProductCharact caract={productos} />
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
            <ProductPolitics politics={productos} />
            <Footer />
        </div>
    )
}