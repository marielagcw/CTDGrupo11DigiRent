import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='myNavbar d-flex flex-column align-items-center pt-3 pb-3'>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <div className="searchContainer">
                <form action="POST" className='d-flex align-items-center pt-3'>
                    <div className="iconInput">
                        <input className='input-search' type="text" placeholder='¿A donde vamos?' />
                        <span className='icon iconLocation'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                    </div>
                    <div className="iconInput">
                        <input type="text" className='ms-2 input-search' name="date" id="" placeholder='ingrese la fecha' />
                        <span className='icon iconCalender'>
                            <FontAwesomeIcon icon={faCalendar} />
                        </span>
                    </div>
                    <button className='btn btn-lg btn-primary ms-2'>Aceptar</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar