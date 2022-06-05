import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../styles/Form.css'
import '../styles/iconForms.css'
import Header from './Header';
import Footer from './Footer';
// import{chechPassword,chechSingleMail} from '../scripts/formValidation';
import { useForm } from '../hooks/useForm';

const initialForm = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const validationForm = form => {
    let errors = {};
    let regrexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido"
    } else if (!regrexName.test(form.name.trim())) {
        errors.name = "El campo solo permite letras"
    }
    if (!form.lastName.trim()) {
        errors.lastName = "El campo 'Apellido' es requerido"
    } else if (!regrexName.test(form.lastName.trim())) {
        errors.lastName = "El campo solo permite letras"
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido"
    } else if (!regexEmail.test(form.email)) {
        errors.email = "Ingrese un mail valido!"
    }
    if (!form.password.trim()) {
        errors.password = "El campo 'Contraseña' es requerido"
    } else if (form.password.length < 6) {
        errors.password = "La contraseña debe tener 6 caracteres o más"
    }
    if (!form.confirmPassword.trim()) {
        errors.confirmPassword = "El campo 'Confirmar Contraseña' es requerido"
    } else if (form.confirmPassword !== form.password) {
        errors.confirmPassword = "Las contraseñas no coinciden"
    }

    return errors;
};

const RegistreForm = () => {
    const navigate = useNavigate();

    const {
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleBlur,
        handleChange } = useForm(initialForm, validationForm);

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


    return (
        <>
            <Header btn="login" />
            <button type="button" className="btn-close btn-close-black" aria-label="Close" onClick={() => navigate('/')}></button>
            <div className="flex" id='registreForm'>
                <div className='form-container'>
                    <h1 className='create-acount'>Crear cuenta</h1>
                    <form onSubmit={handleSubmit} className='d-flex flex-column'>
                        <div className="d-flex">
                            <div className="d-flex flex-column">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    className='input'
                                    name='name'
                                    placeholder='Escribe tu nombre'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.name} required
                                />
                                {errors.name && <p className='error'>{errors.name}</p>}
                            </div>
                            <div className="d-flex flex-column ms-2">
                                <label htmlFor="lastName">Apellido</label>
                                <input type="text"
                                    className='input'
                                    name='lastName'
                                    placeholder='Escribe tu apellido'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.lastName} required />
                                {errors.lastName && <p className='error'>{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="text"
                                className='input'
                                name='email'
                                placeholder='Escribe tu email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.email} required />
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>
                        <div className="d-flex flex-column iconInput">
                            <label htmlFor="password">Contraseña</label>
                            <input type={passwordType}
                                className='input'
                                name='password'
                                placeholder='Escribe tu contraseña'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.password} required />
                            {errors.password && <p className='error'>{errors.password}</p>}
                            <span className='icon icon-display-password' onClick={handleDisplayPassword}>
                                <FontAwesomeIcon icon={faEyeSlash} />
                            </span>
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input type='password'
                                className='input'
                                name='confirmPassword'
                                placeholder='Re-escribe tu contraseña'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.confirmPassword} required />
                            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                        </div>
                        <div className='mt-3 row justify-content-center'>
                            <button className='btn btn-primary btn-lg'
                                disabled={Object.entries(errors).length > 0}
                            >Crear Cuenta</button></div>
                    </form>
                    <div className='mt-3 row justify-content-center'>
                        <p>¿Tienes una cuenta? <span id="link" onClick={() => navigate('/login')}>Iniciar Sesion</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RegistreForm;