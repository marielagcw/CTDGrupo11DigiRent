import { useState } from 'react';

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
        if(e.target.classList.contains('login')){
            let user = storage.getItem('user');
            let band = true;
            for (const key in form) {
                if (Object.hasOwnProperty.call(form, key)) {
                    const element = form[key];
                    if (element!==user[key]) {
                        band=false;
                    }
                }
            }
            return {logged:band, info:{name:user.name,lastName:user.lastName}};
        }else{
            storage.setItem('user',JSON.stringify(form));
            return {logged:true, info:{name:form.name,lastName:form.lastName}};
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
