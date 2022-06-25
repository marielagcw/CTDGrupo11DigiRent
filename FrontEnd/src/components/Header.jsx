import React from 'react'
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import logo from '../img/Logo.png'
import '../styles/Header.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UserInfo from './UserInfo';
import UserInfoMobile from './UserInfoMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const frase = "Elegí donde querés vivir";

const Header = ({ user, btn }) => {
  const navigate = useNavigate();
  const storage = window.localStorage;
  const userSession = storage.getItem('user');
  const location = useLocation();

  //controla tamaño ventana
  const [widthWindow, setWidthWindow] = useState(0);
  const [logged, setlogged] = useState(storage.getItem('jwt'))

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
          <div className='logo-frase d-flex align-items-center'>
            <div className='logo' onClick={() => navigate('/')}>
              <div className='image-container d-flex align-items-center'>
                <img src={logo} className='img-fluid' alt='logo' />
              </div>
              <p className='logo-text ps-2 fw-bold mb-0'>Digi <span className='bg-tertiary fw-bold text-light ps-1 pe-1'>Rent</span></p>
            </div>
            <p className='frase ps-2 fw-bold mb-0 mobile-style'>{frase}</p>
          </div>
          {userSession ? widthWindow > 600 ? <UserInfo userInfo={JSON.parse(userSession)} /> : " " :  
            <div className={widthWindow > 600 ? 'session-manager' : 'session-manager display-none'}>
              {btn !== "login" && <Link to='/register'>
                <button className='btn btn-lg btn-border-primary' id='createAcount' >Crear cuenta</button>
              </Link>}
              {btn !== "register" && <Link to='/login'>
                <button className='btn btn-lg btn-border-primary ms-2 me-2' id='logIn' >Iniciar sesión</button>
              </Link>}
            </div>}
          {widthWindow <= 600 && <Menu right width={'60%'} styles={{ height: '20%' }}>
          
          { userSession ? 
                <>
                  <div className='menu-home-burguer' style={{height:'175px',display:'flex' , alignItems:'end' ,justifyContent:'end', padding:'0px 10px 3px 0px'}}>
                    <UserInfoMobile userInfo={JSON.parse(userSession)} />
                  </div>
                  <div style={{height:'67%', display:'flex', justifyContent:'end', alignItems:'end'}}>
                    <p className='text-link'>¿Desea <span className='link' onClick={() => { storage.clear(); navigate('/') }}>Cerrar Sesion</span>?</p>
                  </div>
                  <hr style={{width: '100%',color: 'black', margin:'0px', border:'none'}}/>
                </>
              :
              <>
              <div className='menu-home-burguer' style={{height:'175px',display:'flex' , alignItems:'end' ,justifyContent:'end', padding:'0px 10px 3px 0px'}}>
                <a id="home" className="menu-item" href="/">Menú</a> 
              </div>
              <div style={{height:'67%',idth:'100%', padding:'0px 15px'}}>
                {location.pathname !== '/login' && <a id="about" className="menu-item a-iniciar-crear" style={{display:'block', textAlign:'end', padding:'17px 0px'}} href="/login">Inciar sesión</a>}
                <hr style={{width: '100%',color: 'black', margin:'0px', border:'none'}}/>
                {location.pathname !== '/register' && <a id="contact" className="menu-item a-iniciar-crear" style={{display:'block', textAlign:'end', padding:'17px 0px'}} href="/register">Crear cuenta</a>
                }
                <hr style={{width: '100%',color: 'black', margin:'0px', border:'none'}}/>
              </div>
              </>
              }
            <div style={{width:'100%', height:'40px', display:'flex', justifyContent:'end', padding:'5px 10px 3px 0px'}}>
              <div className='footer-icons'>
                <FontAwesomeIcon className='iconFooter' icon={faFacebook} />
                <FontAwesomeIcon className='ms-3 iconFooter' icon={faLinkedin} />
                <FontAwesomeIcon className='ms-3 iconFooter' icon={faTwitter} />
                <FontAwesomeIcon className='ms-3 iconFooter' icon={faInstagram} />
              </div>
            </div> 
          </Menu>}
        </div>
      </nav>
    </>
  )
}

export default Header;