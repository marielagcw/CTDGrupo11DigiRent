import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css'
import { useForm } from '../hooks/useForm';

const initialForm = {
    name: "",
    lastName: "",
    email: "",
    ciudad: "",
    
};



const ReservaForm = (  ) => {
    const navigate = useNavigate();
    const [logged, setLogged] = useState({ logged: false, info: {} })

    const {
        form,
        
        handleSubmit,
        handleBlur,
        handleChange } = useForm(initialForm);

        useEffect(() => {
            if (logged.logged) {
                navigate('/');
            }
        }, [logged])



    return (
        <>
            <div className="flex" id='reservaForm'>                
            <div className="card producto mb-3" >
                <div className='category-container m-3'>
                    <div className='d-flex justify-content-between align-item-center flex-wrap'></div>
                    <form onSubmit={(e) => setLogged(handleSubmit(e))}
                        className='d-flex flex-column register'>
                        <div className="d-flex">

                            
                            <div className="d-flex flex-column">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    className='input'
                                    name='name'
                                    placeholder='Bruno'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.name} disabled
                                />
                                
                            </div>
                            <div className="d-flex flex-column ms-2">
                                <label htmlFor="lastName">Apellido</label>
                                <input type="text"
                                    className='input'
                                    name='lastName'
                                    placeholder='Rodriguez'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.lastName} disabled 
                                />
                                
                            </div>
                        </div>
                        <div className="d-flex">
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email"
                                className='input'
                                name='email'
                                placeholder='dbrodriguez@gmail.com'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.email} disabled
                             />
                            
                        </div>
                        <div className="d-flex flex-column ms-2">
                                <label htmlFor="name">Ciudad</label>
                                <input
                                    type="text"
                                    className='input'
                                    name='ciudad'
                                    placeholder='Escribe tu nombre'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.name} required
                                />
                                
                        </div>

                        </div>
                        
                        
                        
                    </form>
                    
                </div>
            </div>
            </div>
            
        </>
    )




}

export default ReservaForm;