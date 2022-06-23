import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import{chechPassword,chechSingleMail} from '../scripts/formValidation';
import { useForm } from '../hooks/useForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import '../styles/Form.css'
import '../styles/iconForms.css'
import Header from './Header'
import Footer from './Footer'

const initialForm = {
  email: "",
  password: ""
};

const validationForm = form => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El email ingresado es invalido"
  }
  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido"
  }
  if (form.password.length < 6) {
    errors.password = "La contraseña debe tener 6 caracteres o más"
  }
  return errors;
};

const LogInForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleBlur,
    handleChange } = useForm(initialForm, validationForm);

  const navigate = useNavigate()
  const [passwordType, setPasswordType] = useState('password');
  const [logged, setLogged] = useState(window.localStorage.getItem('jwt'))

  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  }, [logged])


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
  /* --------------------------------- FETCH --------------------------------- */
  // const [post, setpost] = useState(false)
  // useEffect(() => {



  // }, [post])


  return (
    <>
      <Header btn="register" />
      <button type="button" className="btn-close btn-close-black " aria-label="Close" onClick={() => navigate('/')}></button>
      <div className="flex" id='logInForm'>
        <div className='form-container'>
          <h1 className='create-acount'>Iniciar Sesión</h1>
          <form onSubmit={(e) => setLogged({ logged: handleSubmit(e) })} className='d-flex flex-column login'>
            {errors.badCredentials && <p className='error'>{errors.badCredentials}</p>}
            <div className="d-flex flex-column">
              <label htmlFor="email">Correo electrónico</label>
              <input className='input input-login'
                type="text"
                name='email'
                placeholder='Escribe tu email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.email} required />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className="d-flex flex-column iconInput">
              <label htmlFor="password">Contraseña</label>
              <input
                className='input input-login input-login-password' type={passwordType}
                name='password'
                placeholder='Escribe tu contraseña'
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.password} required />
              <span className='icon icon-display-password' onClick={handleDisplayPassword}>
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            </div>
            {errors.password && <p className='error'>{errors.password}</p>}
            {response && <p className="error">{response}</p>}
            <div className='mt-5 row justify-content-center'>
              <button className='btn btn-primary btn-lg'
                disabled={Object.entries(errors).length > 0}
              >Ingresar</button>
            </div>
          </form>
          <div className='mt-5'>
            <p>¿Aún no tienes cuenta? <span id="link" onClick={() => navigate('/register')}>Registrate</span></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LogInForm;