import React from 'react'
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import logo from '../img/Logo.png'
import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';

const frase = "Elegí donde querés vivir";

const Header = ({ user, btn }) => {
  const navigate = useNavigate();
  const storage = window.localStorage;
  const userSession = storage.getItem('user');

  //controla tamaño ventana
  const [widthWindow, setWidthWindow] = useState(0);

  useEffect(() => {
    const detectarWidth = () => { setWidthWindow(window.visualViewport.width) };
    window.addEventListener('resize', () => detectarWidth())
    return () => {
      window.removeEventListener('resize', detectarWidth())
    }
  }, [widthWindow])

  return (
    <>
      <nav className='navbar navbar-light'>
        <div className='container-fluid'>
          <div className='logo d-flex align-items-center' onClick={() => navigate('/')}>
            <div className='image-container d-flex align-items-center'>
              <img src={logo} className='img-fluid' alt='logo' />
            </div>
            <p className='ps-2 fw-bold mb-0'>Digi <span className='bg-tertiary fw-bold text-light ps-1 pe-1'>Rent</span></p>
            <p className='ps-2 fw-bold mb-0'>{frase}</p>
          </div>{userSession ? widthWindow > 452 ? <UserInfo userInfo={JSON.parse(userSession)} /> : " " :
            <div className={widthWindow > 452 ? 'session-manager' : 'session-manager display-none'}>
              {btn !== "login" && <Link to='/register'>
                <button className='btn btn-lg btn-border-primary' id='createAcount' >Crear cuenta</button>
              </Link>}
              {btn !== "register" && <Link to='/login'>
                <button className='btn btn-lg btn-border-primary ms-2 me-2' id='logIn' >Iniciar sesión</button>
              </Link>}
            </div>}
          {widthWindow <= 452 && <Menu right width={'200px'} styles={{ height: '20%' }}>

            <a id="home" className="menu-item" href="/">Home</a>
            {userSession ? <span onClick={() => { storage.removeItem('user'); navigate('/') }}>Cerrar Sesion</span> :
              <>
                <a id="about" className="menu-item" href="/login">Log In</a>
                <br/>
                <a id="contact" className="menu-item" href="/register">Register</a>
              </>}
          </Menu>}
        </div>
      </nav>
    </>
  )
}

export default Header;