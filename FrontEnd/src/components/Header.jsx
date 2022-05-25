import React from 'react'
import { useEffect, useState } from 'react';
import RegistreForm from './RegistreForm';
import logo from '../img/Logo.png'
import '../styles/Header.css'
import { displayForm } from '../scripts/displayForm';
import LogInForm from './LogInForm';


const Header = () => {
  //controla tamaño ventana
  const [widthWindow, setWidthWindow] = useState(0);

  useEffect(() => {
    const detectarWidth = (e) => { setWidthWindow(window.visualViewport.width)};
    window.addEventListener('resize', (e) => detectarWidth())
    return () => {
      window.removeEventListener('resize', detectarWidth())
    }
  }, [widthWindow])


  const handleCreateAccountLogIn = (e) => {
    displayForm(e)

  }

  const toggleVisibility = () => {
    document.querySelector('.session-manager').classList.toggle('display-none');
  }
  const returnHome = () =>{
    window.location.reload();
  }

  return (
    <>
      <nav className='navbar navbar-light'>
        <div className='container-fluid'>
          <div className='logo d-flex align-items-center' onClick={returnHome}>
            <div className='image-container d-flex align-items-center'>
              <img src={logo} className='img-fluid' alt='logo' />
            </div>
            <p className='ps-2 fw-bold mb-0'>Digi <span className='bg-tertiary fw-bold text-light ps-1 pe-1'>Rent</span></p>
          </div>
          <div className={widthWindow>452?'session-manager':'session-manager display-none'}>
            <button className='btn btn-lg btn-border-primary' id='createAcount' onClick={handleCreateAccountLogIn}>Crear cuenta</button>
            <button className='btn btn-lg btn-border-primary ms-2 me-2' id='logIn' onClick={handleCreateAccountLogIn}>Iniciar sesión</button>
          </div>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent15'
            aria-controls='navbarSupportedContent15' aria-expanded='false' aria-label='Toggle navigation' onClick={toggleVisibility}><span className='navbar-toggler-icon' ></span></button>
        </div>
      </nav>
      <RegistreForm />
      <LogInForm />
    </>
  )
}

export default Header;