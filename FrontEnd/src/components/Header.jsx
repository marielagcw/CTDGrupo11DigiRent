import React from 'react'
import RegistreForm from './RegistreForm';
import logo from '../img/Logo.png'
import '../styles/Header.css'


const Header = () => {
  return (
      <>
        <nav className='navbar navbar-light'>
          <div className="container-fluid">

            <div className='d-flex align-items-center'>
                <div className="image-container d-flex align-items-center">
                  <img src={logo} className="img-fluid" alt="logo" />
                </div>
                <p className='ps-2 fw-bold mb-0'>Digi <span className='bg-primary fw-bold text-light ps-1 pe-1'>Rent</span></p>
            </div>
            <div>
                <button className='btn btn-lg btn-border-primary' data-bs-target="#collapseRegistre" data-bs-toggle="collapse">Crear cuenta</button>
                <button className='btn btn-lg btn-border-primary ms-2 me-2'>Iniciar sesión</button>
            </div>
          </div>
        </nav>
        <div className="collapse" id="collapseRegistre">
              <RegistreForm />
        </div>
      </>
  )
}

export default Header;