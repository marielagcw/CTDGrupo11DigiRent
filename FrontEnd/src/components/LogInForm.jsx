import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import '../styles/Form.css'
import '../styles/iconForms.css'
import Header from './Header'
import Footer from './Footer'



const LogInForm = ({btn}) => {
  const navigate = useNavigate()
  const [passwordType, setPasswordType] = useState('password')


  const handleDisplayPassword = (e) => {
    if (passwordType === 'text') {
      setPasswordType('password')
      e.target.classList.remove('display-password')
      console.log(e.target.classList);

    } else {
      setPasswordType('text')
      e.target.classList.add('display-password')
      console.log(e.target.classList);
    }
  }

  return (
    <>
      <Header btn="register" />
      <button type="button" className="btn-close btn-close-black " aria-label="Close" onClick={() => navigate('/')}></button>
      <div className="flex" id='logInForm'>
        <div className='form-container'>
          <h1 className='create-acount'>Iniciar Sesión</h1>
          <form action="POST" className='d-flex flex-column'>
            <div className="d-flex flex-column">
              <label htmlFor="email">Correo electrónico</label>
              <input className='input input-login' type="text" placeholder="ricardo@correo.com" />
            </div>
            <div className="d-flex flex-column iconInput">
              <label htmlFor="Password">Contraseña</label>
              <input className='input input-login input-login-password' type={passwordType} />
              <span className='icon icon-display-password' onClick={handleDisplayPassword}>
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            </div>
          </form>
          <div className='mt-5 row justify-content-center' >
            <button className='btn btn-primary btn-lg'>Ingresar</button>
            <p>¿No tienes una cuenta? <span id="link" onClick={() => navigate('/register')}>Registrate</span></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LogInForm;