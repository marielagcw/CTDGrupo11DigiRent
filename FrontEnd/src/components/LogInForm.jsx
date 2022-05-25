import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'

import '../styles/Form.css'
import '../styles/iconForms.css'
import { displayForm } from '../scripts/displayForm'


const LogInForm = () => {

  const [passwordType, setPasswordType] = useState('password')

  const handleDisplayPassword = (e) => {
    if(passwordType === 'text'){
        setPasswordType('password')
        e.target.classList.remove('display-password')
        console.log(e.target.classList);

    }else{
      setPasswordType('text')
      e.target.classList.add('display-password')
      console.log(e.target.classList);
    }
  }

  const handleCreateAccountLogIn = (e) => {
    displayForm(e)
    
  }


  return (
    <div className="collapse flex" id='logInForm'>
          <div className='form-container'>
            <h1 className='tittle-form'>Iniciar Sesión</h1>
            <form action="POST" className='d-flex flex-column'>
                <div className="d-flex flex-column">
                    <label htmlFor="email">Correo electrónico</label>
                    <input className='input input-login' type="text" />
                </div>
                <div className="d-flex flex-column iconInput">
                    <label htmlFor="Password">Contraseña</label>
                    <input className='input input-login-password' type={passwordType} />
                    <span className='icon icon-display-password' onClick={handleDisplayPassword}>
                        <FontAwesomeIcon icon={faEyeSlash}/>
                    </span>
                </div>
            </form>
            <div className='mt-5'>
                <button className='btn btn-primary btn-lg'>Ingresar</button>
                <p className='parrafoCreateLogIn'>¿No tienes una cuenta? <span id="link" onClick={handleCreateAccountLogIn}>Registrate</span></p>
            </div>
        </div>
    </div>
  )
}

export default LogInForm