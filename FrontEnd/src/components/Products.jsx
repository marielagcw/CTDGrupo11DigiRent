import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/Navbar.css'
import '../styles/Products.css'
import productosEstaticos from '../productos.json';
import ProductLocation from './ProductLocation';
import ProductGalery from './ProductGalery';
import { useNavigate } from 'react-router-dom';
import ProductCharact from './ProductCharact';

export default function Products() {
    let ciudades = productosEstaticos.ciudades;
    let productos = productosEstaticos.productos;
    const navigate = useNavigate();
    return (
        <div id='product'>
            <Header />

            <div className='myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3'>
                <div className="title-product">
                    <h3>{productos[0].category}</h3>
                    <h1>{productos[0].title}</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16" onClick={() => navigate('/')}>
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </div>
            <ProductLocation productInfo={productos[0].location} />
            <ProductGalery galery={productos} />
            <div id='description'>
            <h2 className='description-title title'>Descripción</h2>
            <p className='description-text'>{ productos[0].description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minus perferendis laborum ut distinctio eveniet vero? Ratione totam distinctio dolorem obcaecati dolorum, eos inventore! Porro ex magni asperiores laudantium? Aliquam?
            Dolorem temporibus, cumque praesentium tempora cupiditate nulla reiciendis error facilis expedita maxime fuga ullam quisquam suscipit. Dolore error, consectetur sapiente dignissimos illo illum rem quia voluptatem consequuntur dolores, repellat obcaecati?
            Optio, saepe mollitia inventore possimus debitis, porro molestias, suscipit quis deleniti voluptates dolorem quas facere amet esse repudiandae vitae officia nulla minus dolore assumenda cupiditate labore? Nemo repellendus repellat soluta.</p>
            </div>
            <ProductCharact caract={productos}/>
            <Footer />
        </div>
    )
}