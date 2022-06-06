import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/Navbar.css'
import '../styles/Products.css'
import productosEstaticos from '../productos.json';
import ProductLocation from './ProductLocation';
import ProductGalery from './ProductGalery';
import { useNavigate } from 'react-router-dom';

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
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16" onClick={() => navigate('/')}>
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </div>
            <ProductLocation productInfo={productos[0].location} />
            <ProductGalery galery={productos}/>
            <Footer />
        </div>
    )
}