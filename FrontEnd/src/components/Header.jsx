import React from 'react'
import RegistreForm from './RegistreForm';
import logo from '../img/Logo.png'
import '../styles/Header.css'
import { displayForm } from '../scripts/displayForm';
import LogInForm from './LogInForm';


const Header = () => {

  const handleCreateAccountLogIn = (e) => {
    displayForm(e)
    
  }


  return (
      <>
        <nav className='navbar navbar-light'>
          <div className="container-fluid">
            <div className='d-flex align-items-center'>
                <div className="image-container d-flex align-items-center">
                  <img src={logo} className="img-fluid" alt="logo" />
                </div>
                <p className='ps-2 fw-bold mb-0'>Digi <span className='bg-tertiary fw-bold text-light ps-1 pe-1'>Rent</span></p>
            </div>
            <div>
                <button className='btn btn-lg btn-border-primary' id='createAcount' onClick={handleCreateAccountLogIn}>Crear cuenta</button>
                <button className='btn btn-lg btn-border-primary ms-2 me-2' id='logIn' onClick={handleCreateAccountLogIn}>Iniciar sesión</button>
            </div>
          </div>
        </nav>
        <RegistreForm />
        <LogInForm/>
      </>
  )
}

export default Header;