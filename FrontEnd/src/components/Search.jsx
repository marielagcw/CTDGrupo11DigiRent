import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import ciudades from "../productos.json";
import '../styles/Navbar.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Search.css'



const Search = () => {

    const [widthWindow, setWidthWindow] = useState(0);
    const [formData, setFormData] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        alert("Procesando Solicitud!\n" +
            "Buscando en: " + formData.ciudad +
            "\nCon fecha: " + formateDate(fecha))
    }
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    useEffect(() => {
        const detectarWidth = (e) => { setWidthWindow(window.visualViewport.width) };
        window.addEventListener('resize', (e) => detectarWidth())
        return () => {
            window.removeEventListener('resize', detectarWidth())
        }
    }, [widthWindow])

<<<<<<< HEAD
    const [value, onChange] = useState(new Date([]));

    const sendCalendar = (e) => {
        e.preventDefault()
        if (value.length > 1) {
=======
    const [fecha, setfecha] = useState(new Date([]));

    const sendCalendar = (e) => {
        e.preventDefault()
        if (fecha.length > 1) {
>>>>>>> 6-implementacion-template-bloque-buscador
            let container = document.querySelector('.calandary-container')
            container.classList.add('d-none')
            container.classList.remove('form-flex')
        }
    }

    const showCalendar = () => {
        let container = document.querySelector('.calandary-container')
        container.classList.toggle('d-none')
        container.classList.toggle('form-flex')
    }

    const formateDate = (dateSinFormato) => {
        let fInicio, fFin;

        [fInicio, fFin] = dateSinFormato;

        let dateFormateada = fInicio.getDate() + "/" + (fInicio.getMonth() + 1) +
            " - " + fFin.getDate() + "/" + (fFin.getMonth() + 1);

<<<<<<< HEAD
    return (<>
        <div className="searchContainer">
            <form action="POST" className='d-flex align-items-center pt-3'>
                <div className="iconInput">
                    <input className='input-search' type="text" placeholder='¿A donde vamos?' />
=======

        return dateFormateada;
    }
    //Array ciudades
    let ciudadesList = ciudades.ciudades;


    return (<>
        <div className="searchContainer">
            <form action="POST" onSubmit={handleSubmit} className='d-flex align-items-center pt-3'>
                <div className="iconInput">
                    <input className='input-search' type="text" list="ciudades" placeholder='¿A donde vamos?' name='ciudad' onChange={handleChange} />
>>>>>>> 6-implementacion-template-bloque-buscador
                    <span className='icon iconLocation'>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <datalist id="ciudades">
                        {ciudadesList.map((e, i) =>
                            <option fecha={e} key={"ciudad_" + i} >{e}</option>
                        )}
                    </datalist>
                </div>
                <div className="iconInput">
<<<<<<< HEAD
                    <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='Check in - Check out' value={value[0] ? `${value[0].getDate()}/${value[0].getMonth() + 1} - ${value[1].getDate()}/${value[1].getMonth() + 1}` : ''} />
=======
                    <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='Check in - Check out' value={(fecha[0] ? formateDate(fecha) : '')} onChange={handleChange} />
>>>>>>> 6-implementacion-template-bloque-buscador
                    <span onClick={showCalendar} className='icon iconCalender'>
                        <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    <div className='calandary-container d-none form-absolute'>
<<<<<<< HEAD
                        <Calendar showDoubleView={widthWindow > 414} selectRange={true} onChange={onChange} />
=======
                        <Calendar showDoubleView={widthWindow > 414} selectRange={true} onChange={setfecha} />
>>>>>>> 6-implementacion-template-bloque-buscador
                        <button onClick={sendCalendar} className='btn btn-primary btn-lg btn-calendary'>Aplicar</button>
                    </div>
                </div>
                <button type='submit' className='btn btn-lg btn-primary ms-2'>Aceptar</button>
            </form>

        </div>



    </>


    )
}

export default Search