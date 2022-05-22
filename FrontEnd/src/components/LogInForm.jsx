import React from 'react'
import '../styles/Form.css'


const LogInForm = () => {
  return (
    <div className="collapse flex" id='logInForm'>
          <div className='form-container'>
            <h1 className='create-acount'>Iniciar Sesión</h1>
            <form action="POST" className='d-flex flex-column'>
                <div className="d-flex flex-column">
                    <label htmlFor="email">Correo electrónico</label>
                    <input className='input-login' type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="Password">Contraseña</label>
                    <input className='input-login' type="password" />
                </div>
            </form>
            <div className='mt-5'>
                <button className='btn btn-primary btn-lg'>Ingresar</button>
                {/* <p>Ya tienes una cuenta?</p><link href="">Iniciar Sesion</link> */}
            </div>
        </div>
    </div>
  )
}

export default LogInForm