import React from 'react'


import '../styles/Navbar.css'
import Search from './Search'

const Navbar = ({busqueda, titulo}) => {


    return (
        <div className='myNavbar d-flex flex-column align-items-center pt-3 pb-3'>
            <h1 className='tituloFondoVerde'>{titulo}</h1>
            {busqueda&&<Search busqueda={busqueda} />}
        </div>
    )
}

export default Navbar