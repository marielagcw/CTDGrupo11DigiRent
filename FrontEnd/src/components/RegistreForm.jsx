import React from 'react'

const RegistreForm = () => {
  return (
    <div className='container d-flex flex-column aling-items-center'>
        <h1>Crear cuenta</h1>
        <form action="POST">
            <div className="d-flex">
                <div className="d-flex flex-column">
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="Apellido">Apellido</label>
                    <input type="text" />
                </div>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="Apellido">Apellido</label>
                <input type="text" />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="Apellido">Apellido</label>
                <input type="text" />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="Apellido">Apellido</label>
                <input type="text" />
            </div>
        </form>
        <button className='btn btn-primary'>Crear Cuenta</button>
        <div>
            {/* <p>Ya tienes una cuenta?</p><link href="">Iniciar Sesion</link> */}
        </div>
    </div>
  )
}

export default RegistreForm;