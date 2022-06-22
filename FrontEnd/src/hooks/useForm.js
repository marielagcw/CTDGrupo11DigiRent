import React from 'react';
import { useState } from 'react';
import UserInfo from '../components/UserInfo';



export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    //para usar con api
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    };
    const handleBlur = (e) => {
        handleChange(e);

        setErrors(validateForm(form))
    };
    const handleSubmit = (e) => {


        e.preventDefault();
        const storage = window.localStorage;
        if (e.target.classList.contains('login')) {
            let url = "http://localhost:8080/usuarios/authenticate";
            let fetchInfo = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: form.email,
                    password: form.password
                })
            }
            let login = async () => {
                try {
                    let data = await fetch(url, fetchInfo);
                    if (data.ok) {
                        setLoading(false);
                    } else {
                        throw {
                            err: true
                        }
                    }
                    let token = await data.json();
                    storage.setItem('jwt', JSON.stringify(token));
                    console.log(storage.getItem('jwt'));
                    storage.setItem('user',JSON.stringify({ name: "nombre", lastName: "apellido"}));
                } catch (err) {
                    setResponse("Error en las credenciales ingresadas")
                }
            }
            // let userInfo = async (token)=>{
            //     let data = await fetch();
            //     let user = await data.json();
            // }
            login();
            //setResponse(userInfo(storage.getItem('jwt')));

            // return { logged: band, info: { name: user.name, lastName: user.lastName } };
            return { logged: storage.getItem('jwt') };
        } else {
            storage.setItem('user', JSON.stringify(form));
            return { logged: true };
        }
    };


    return {
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleBlur,
        handleChange
    }

}
