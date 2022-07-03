import React from 'react'


import '../styles/Navbar.css'
import Search from './Search'

const Navbar = ({busqueda, titulo, fechaFilter}) => {


    return (
        <div id="header-producto" className='myNavbar d-flex flex-column align-items-center pt-3 pb-3'>
            <h1 id="titulo-navbar" className='tituloFondoVerde'>{titulo}</h1>
            {busqueda&&<Search busqueda={busqueda} fechaFilter={fechaFilter}/>}
        </div>
    )
}

export default Navbar