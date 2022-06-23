import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import '../styles/Navbar.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Search.css'



const Search = ({ busqueda }) => {

    const [widthWindow, setWidthWindow] = useState(0);
    const [formData, setFormData] = useState({})

    const HandleSubmit = e => {
        let data;
        e.preventDefault();
        let token = JSON.parse(window.localStorage.getItem('jwt')).jwt;

        const axiosInstance = axios.create({
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' +token
            }
        });
        let user = JSON.parse(window.localStorage.getItem('user'));
        axiosInstance
            .get("http://localhost:8080/productos/listarTodos")
            .then(response => {
                console.log(response);
                data = response;
            })
            .catch(e => console.log(e));
            //TODO filtrar con informacion cuando se renderize
            console.log(data);
            console.log(user);

        // console.log(user);
        // let url = "http://localhost:8080/reservas/listarTodos";
        // let fetchInfo = {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Authorization': 'Bearer ' +token

        //     }
        // }
        // let info = () => axios(url, fetchInfo).then((res) => res.json).then((a) => {
        //     console.log(a);
        //     return a
        // })
        // console.log(info());
    }
    const handleChange = e => {
        if (e.target.name === 'ciudad') { busqueda(e.target.value) }
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

    const [fecha, setfecha] = useState(new Date([]));

    const sendCalendar = (e) => {
        e.preventDefault()
        if (fecha.length > 1) {
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


        return dateFormateada;
    }

    //Array ciudades
    let ciudadesList = [];
    let url = "http://localhost:8080/ciudades/listarTodos";
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    } else {
        data.forEach((e) => {
            !ciudadesList.includes(e.provincia) && ciudadesList.push(e.provincia)
        })
    }

    // let urlFechas = "http://localhost:8080/reservas/fechaDisponible"
    // let fechasElegidas = {
    //     "fechaInicial": "2022-06-21",
    //     "fechaFinal": "2022-06-21"
    //   }

    // let fetchInfo = {
    //     method: "POST",
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(fechasElegidas)
    // }

    // let {data1, isPending1, error1} = useFetch(urlFechas, fetchInfo);
    // if(isPending1){
    //     console.log(error1);
    // } else{

    // }

    return (<>
        <div className="searchContainer">
            <form action="POST" onSubmit={HandleSubmit} className='d-flex align-items-center pt-3'>
                <div className="iconInput">
                    <input className='input-search' type="text" list="ciudades" placeholder='¿A donde vamos?' name='ciudad' onChange={handleChange} />
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
                    <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='Check in - Check out' value={(fecha[0] ? formateDate(fecha) : '')} onChange={handleChange} />
                    <span onClick={showCalendar} className='icon iconCalender'>
                        <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    <div className='calandary-container d-none form-absolute'>
                        <Calendar showDoubleView={widthWindow > 414} selectRange={true} onChange={setfecha} />
                        <div className='d-flex flex-row justify-content-around'>
                            <button onClick={showCalendar} className='btn btn-secondary btn-lg btn-calendary'>Cerrar</button>
                            <button onClick={sendCalendar} className='btn btn-primary btn-lg btn-calendary'>Aplicar</button>
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn btn-lg btn-primary ms-2'>Aceptar</button>

            </form>

        </div>



    </>


    )
}

export default Search