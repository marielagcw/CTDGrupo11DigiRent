import React from 'react'
import '../styles/Form.css'

const RegistreForm = () => {
  return (
    <div className="collapse flex" id='registreForm'>
        <div className='form-container'>
            <h1 className='create-acount'>Crear cuenta</h1>
            <form action="POST" className='d-flex flex-column'>
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" />
                    </div>
                    <div className="d-flex flex-column ms-2">
                        <label htmlFor="Apellido">Apellido</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="Password">Contraseña</label>
                    <input type="password" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="ConfirmPassword">Confirmar contraseña</label>
                    <input type="password" />
                </div>
            </form>
            <div className='mt-3'>
                <button className='btn btn-primary btn-lg'>Crear Cuenta</button>
                {/* <p>Ya tienes una cuenta?</p><link href="">Iniciar Sesion</link> */}
            </div>
        </div>
    </div>
  )
}

export default RegistreForm;