import { useState } from 'react';
import jwt_decode from "jwt-decode";


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
                    console.log('Hola');
                    userInfo();
                    //     storage.setItem('user', JSON.stringify(userInfo()));
                    // console.log(storage.getItem('user'));

                } catch (err) {
                    setResponse("Error en las credenciales ingresadas")
                }
            }
            let userInfo = async () => {
                let token = await storage.getItem('jwt');
                token = jwt_decode(token);
                let userFromBack = {
                    name: token.Nombre,
                    lastName: token.Apellido,
                    id: token.Id
                }
                storage.setItem('user', JSON.stringify(userFromBack))
            }
            login();


            return storage.getItem('user') != null;
        } else {
            // storage.setItem('user', JSON.stringify(form));
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
