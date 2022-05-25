import React from 'react'


import '../styles/Navbar.css'
import Search from './Search'

const Navbar = () => {


  return (
    <div className='myNavbar d-flex flex-column align-items-center pt-3 pb-3'>
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <Search />
    </div>
  )
}

export default Navbar