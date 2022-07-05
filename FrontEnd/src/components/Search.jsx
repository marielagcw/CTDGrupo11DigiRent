import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import '../styles/Navbar.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Search.css';


const urlBase = process.env.REACT_APP_URLBASE;

const Search = ({ busqueda }) => {

    const [today, setToday] = useState(new Date())
    const [widthWindow, setWidthWindow] = useState(0);

    const [ciudadesFiltradas, setCiudadesFiltradas] = useState([''])

    const HandleSubmit = async (e) => {
        e.preventDefault()
        let cod = document.querySelectorAll(".ciudad");
        let inputCiudad = document.querySelector('.input-search').value
        let ciudad_id = null;
        ciudadesList.map((ciudad,i) => {
            if(inputCiudad === ciudad){
                return ciudad_id = i + 1
            }
        })
        
        let buscadorCiudadVacio = ciudad_id === null
        let buscadorFechaVacio = formatDataToSubmit(fecha)[0] === ''
        let datos = '';

        if(!buscadorFechaVacio){
            if(!buscadorCiudadVacio){
                let fechaInicial= formatDataToSubmit(fecha)[0]
                let fechaFinal= formatDataToSubmit(fecha)[1]   
                
                let url = `${urlBase}/productos/ciudad/${ciudad_id}/fechaDisponible?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`

                datos = await axios.get(url)

                busqueda(datos.data)

                console.log(datos);
    

            }else{

                let fechaInicial= formatDataToSubmit(fecha)[0]
                let fechaFinal= formatDataToSubmit(fecha)[1]   
                
                let url = `${urlBase}/productos/fechaDisponible?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`

                datos = await axios.get(url)

                busqueda(datos.data)
    

            }
            
        }
        if(buscadorFechaVacio){
            if(!buscadorCiudadVacio){


                let url = `${urlBase}/productos/ciudad/${ciudad_id}?size=8&page=0`
    

                datos = await axios.get(url)

                busqueda(datos.data)
    

            }else{

                let url = `${urlBase}/productos/listarTodos`
    

                datos = await axios.get(url)

                busqueda(datos.data)
    
                

            }

        }
        if(buscadorFechaVacio){
            let url = `${urlBase}/productos/ciudad/${ciudad_id}?size=8&page=0`

            datos = await axios.get(url)

            busqueda(datos.data)



        }

    }


    useEffect(() => {
        setToday(new Date(Date.now()))
        const detectarWidth = (e) => { setWidthWindow(window.visualViewport.width) };
        window.addEventListener('resize', (e) => detectarWidth())
        return () => {
            window.removeEventListener('resize', detectarWidth())
        }
    }, [widthWindow, ciudadesFiltradas])

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

    const handleChange = (e) => {
        let cityFilter = e.target.value;
        let ciudadesFiltradas = ciudadesList.filter(ciudad => ciudad.includes(cityFilter))
        setCiudadesFiltradas(ciudadesFiltradas)  
        let displayOptions = document.querySelector('.displayOptions')
        displayOptions.hidden = false;


    }

    const formatDataToSubmit = (dataSinFormatear) => {
        let fInicio, fFin;
        let dataFormateadaFinal
        let dataFormateadaInicio
        let fMount, iMount;
        let fDay, iDay;
        console.log(dataSinFormatear);
        if(dataSinFormatear.toString() !== 'Invalid Date'){
            [fInicio, fFin] = dataSinFormatear;
            if((fInicio.getMonth() + 1) < 10){
                iMount = `0${(fInicio.getMonth() + 1)}`
            }else{
                iMount = (fInicio.getMonth() + 1)
            }
            if((fFin.getMonth() + 1) < 10){
                fMount = `0${(fFin.getMonth() + 1)}`
            }else{
                fMount = (fFin.getMonth() + 1)
            }
            if(fInicio.getDate() < 10){
                iDay = `0${fInicio.getDate()}`
            }else{
                iDay = fInicio.getDate()
            }
            if(fFin.getDate() < 10){
                fDay = `0${fFin.getDate()}`
            }else{
                fDay = fFin.getDate()
            }

            console.log(fInicio.getDate());

            dataFormateadaInicio = `${fInicio.getFullYear()}-${iMount}-${iDay}`
            dataFormateadaFinal = `${fFin.getFullYear()}-${fMount}-${fDay}`
        }else{
            dataFormateadaInicio = ''
            dataFormateadaFinal = ''
        }


        return [dataFormateadaInicio, dataFormateadaFinal]

    }

    const displayNone = (e) => {
        let inputCiudad = document.querySelector('.input-search')
        let ciudad = document.querySelector('.cityName').textContent
        let displayOptions = document.querySelector('.displayOptions')
        inputCiudad.value = ciudad
        displayOptions.hidden = true;
    }




    //Array ciudades
    let ciudadesList = [];
    let url = urlBase + "/ciudades/listarTodos?ord=ASC&field=id";
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    } else {
        data.forEach((e) => {
            ciudadesList.push(`${e.nombre}, ${e.provincia}`)
        })
    }

    return (<>
        <div className="searchContainer">
            <form onSubmit={HandleSubmit} className='d-flex align-items-center pt-3'>
                <div className="iconInput">
                    
                    <span className='icon iconLocation'>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <input onChange={handleChange} autoComplete='off' name="ciudad" className='input-search' placeholder='Ingrese una ciudad' id="ciudades" />
                        <div hidden={true} className='displayOptions'>
                            {ciudadesFiltradas !== [''] ? 
                                ciudadesFiltradas.map((e, i) =>
                                    (
                                        <>
                                        <div className='cityContainer' onClick={displayNone}>
                                            <span className='cityIcon'>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            <div className="ciudad" fecha={e} onClick={displayNone} key={i} >
                                                <p className='cityName' style={{margin:"0px"}}>{e}</p> 
                                                <p className='countryName' style={{margin:'0px'}}>Argentina</p>
                                            </div> 

                                        </div>
                                            
                                        </>
                                    )
                                    
                                ):
                                (ciudadesList.map((e, i) =>
                                    (
                                        <>
                                        <div className='cityContainer' onClick={displayNone}>
                                            <span className='cityIcon'>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                            <div className="ciudad" fecha={e}  key={i} >
                                                <p className='cityName' style={{margin:"0px"}}>{e}</p> <p className='countryName' style={{margin:'0px'}}>Argentina</p>
                                            </div> 
                                        </div>
                                        </>
                                    )
                                    
                                ))}
                            
                        </div>
                </div>
                <div className="iconInput">
                    <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='Check in - Check out' value={(fecha[0] ? formateDate(fecha) : '')} />
                    <span onClick={showCalendar} className='icon iconCalender'>
                        <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    <div className='calandary-container d-none form-absolute'>
                        <Calendar defaultView='month' showDoubleView={widthWindow > 414} minDate={today} selectRange={true} onChange={setfecha} />
                        <div className='d-flex flex-row justify-content-around'>
                            <button onClick={showCalendar} className='btn btn-secondary btn-lg btn-calendary'>Cerrar</button>
                            <button onClick={sendCalendar} className='btn btn-primary btn-lg btn-calendary'>Aplicar</button>
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn btn-lg btn-primary ms-2'>Buscar</button>

            </form>

        </div>



    </>


    )
}

export default Search