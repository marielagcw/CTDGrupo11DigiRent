import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../styles/Form.css'
import '../styles/iconForms.css'
import Header from './Header';
import Footer from './Footer';
// import{chechPassword,chechSingleMail} from '../scripts/formValidation';
import { useForm } from '../hooks/useForm';

const urlBase = process.env.REACT_APP_URLBASE;

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
    let badUser = false;
    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido"
        badUser = true;
} else if (!regrexName.test(form.name.trim())) {
        errors.name = "El campo solo permite letras"
        badUser = true;
    }
    if (!form.lastName.trim()) {
        errors.lastName = "El campo 'Apellido' es requerido"
        badUser = true;
    } else if (!regrexName.test(form.lastName.trim())) {
        errors.lastName = "El campo solo permite letras"
        badUser = true;
    }
    if (!form.email.trim()) {
        badUser = true;
        errors.email = "El campo 'Email' es requerido"
    } else if (!regexEmail.test(form.email)) {
        badUser = true;
        errors.email = "Ingrese un mail valido!"
    }
    if (!form.password.trim()) {
        badUser = true;
        errors.password = "El campo 'Contraseña' es requerido"
    } else if (form.password.length < 6) {
        badUser = true;
        errors.password = "La contraseña debe tener 6 caracteres o más"
    }
    if (!form.confirmPassword.trim()) {
        errors.confirmPassword = "El campo 'Confirmar Contraseña' es requerido"
        badUser = true;
    } else if (form.confirmPassword !== form.password) {
        errors.confirmPassword = "Las contraseñas no coinciden"
        badUser = true;
    }
    if(errors.length === 0){
        badUser = false;
    }
      
    return (errors);
};


const RegistreForm = (  ) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState()
    const [logged, setLogged] = useState({ logged: false, info: {} })
    const from = location.state;
    
    
    const {
        form,
        errors,
        loading,
        response,
        handleBlur,
        handleChange } = useForm(initialForm, validationForm);

    const [passwordType, setPasswordType] = useState('password')

    const handleSubmit = async (e) => {
        e.preventDefault()
        let url = urlBase + '/usuarios/registro'
        let newUser = {
            nombre: form.name,
            apellido: form.lastName,
            email: form.email,
            password: form.password,
            ciudad: "La plata",
            rol:{
                id: 3
            }
        }

        await axios.post(url,newUser).then(datos => {
            console.log(datos)
            //inicioSesion(newUser);
            }).catch(err => console.log(err));
        setLogged({logged:true})
    } 


    const handleDisplayPassword = (e) => {
        if (passwordType === 'text') {
            setPasswordType('password')
            e.target.classList.remove('display-password')
        } else {
            setPasswordType('text')
            e.target.classList.add('display-password')
        }
    }
    useEffect(() => {
        if (logged.logged) {
            if (from.from == '/login') {
                navigate('/');
            }
            navigate(from.from);
        }
    }, [logged, data])


    return (
        <>
            <Header btn="login" />
            <button type="button" className="btn-close btn-close-black" aria-label="Close" onClick={() => navigate('/')}></button>
            <div className="flex" id='registreForm'>
                <div className='form-container'>
                    <h1 className='create-acount'>Crear cuenta</h1>
                    <form onSubmit={(e) => {
                            setLogged(handleSubmit(e))
                        }}
                        className='d-flex flex-column register'>
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
                            <button type='submit' className='btn btn-primary btn-lg'
                                disabled={Object.entries(errors).length > 0}
                            >Crear Cuenta</button></div>
                    </form>
                    <div className='mt-3 row justify-content-center'>
                        <p>¿Ya tienes una cuenta? <span id="link" onClick={() => navigate('/login')}>Iniciar Sesión</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RegistreForm;