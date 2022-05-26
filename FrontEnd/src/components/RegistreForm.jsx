import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../styles/Form.css'
import '../styles/iconForms.css'
import { displayForm } from '../scripts/displayForm'

const RegistreForm = (props) => {

    const [passwordType, setPasswordType] = useState('password')

    const handleDisplayPassword = (e) => {
        if (passwordType === 'text') {
            setPasswordType('password')
            e.target.classList.remove('display-password')
        } else {
            setPasswordType('text')
            e.target.classList.add('display-password')
        }
    }
    const handleClick = (e) => {
        e.target.classList.add('collapse');
        window.location.reload();
    }
    const handleCreateAccountLogIn = (e) => {
        displayForm(e)
    }


    return (
        <>
            <button type="button" className="btn-close btn-close-black collapse" aria-label="Close" onClick={handleClick}></button>
            <div className="collapse flex" id='registreForm'>
                <div className='form-container'>
                    <h1 className='create-acount'>Crear cuenta</h1>
                    <form action="POST" className='d-flex flex-column'>
                        <div className="d-flex">
                            <div className="d-flex flex-column">
                                <label htmlFor="Nombre">Nombre</label>
                                <input type="text" className='input' />
                            </div>
                            <div className="d-flex flex-column ms-2">
                                <label htmlFor="Apellido">Apellido</label>
                                <input type="text" className='input' />
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="text" className='input' />
                        </div>
                        <div className="d-flex flex-column iconInput">
                            <label htmlFor="Password">Contraseña</label>
                            <input type={passwordType} className='input' />
                            <span className='icon icon-display-password' onClick={handleDisplayPassword}>
                                <FontAwesomeIcon icon={faEyeSlash} />
                            </span>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="ConfirmPassword">Confirmar contraseña</label>
                            <input type="password" className='input' />
                        </div>
                    </form>
                    <div className='mt-3'>
                        <button className='btn btn-primary btn-lg'>Crear Cuenta</button>
                        <p>¿Tienes una cuenta? <span id="link" onClick={handleCreateAccountLogIn}>Iniciar Sesion</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistreForm;