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
    const [datosFiltrados, setDatosFiltrados] = useState({})

    /*const HandleSubmit = e => {
        let data;
        e.preventDefault();
        let token = JSON.parse(window.localStorage.getItem('jwt')).jwt;

        const axiosInstance = axios.create({
            headers: {
                'Accept': 'application/json, text/plain, *',
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
        //         'Accept': 'application/json, text/plain, ',
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
    } */

    const HandleSubmit = async (e) => {
        e.preventDefault()
        let cod = document.getElementById("ciudades");
        let ciudad_id;
        let buscadorCiudadVacio = (cod.selectedIndex === 0)
        let buscadorFechaVacio = formatDataToSubmit(fecha)[0] === ''


    
        if(!buscadorFechaVacio){
            if(!buscadorCiudadVacio){
                ciudad_id = cod.selectedIndex + 1
                let fechaInicial= formatDataToSubmit(fecha)[0]
                let fechaFinal= formatDataToSubmit(fecha)[1]   
                
                let url = `http://localhost:8080/productos/ciudad/${ciudad_id}/fechaDisponible?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`

                await axios.get(url).then(response => setDatosFiltrados(response)).catch(r => console.log(r))
            }else{

                ciudad_id = (cod.selectedIndex + 1)
                let url = `http://localhost:8080/productos/ciudad/${ciudad_id}?size=8&page=0`
    
                await axios.get(url).then(response => setDatosFiltrados(response)).catch(r => console.log(r))
    
                busqueda(datosFiltrados.data)

            }
            
        }else if(buscadorCiudadVacio){
            if(buscadorFechaVacio){

                let url = `http://localhost:8080/productos/listarTodos`
    
                await axios.post(url).then(response => setDatosFiltrados(response)).catch(r => console.log(r))
            }else{

                let fechaInicial= formatDataToSubmit(fecha)[0]
                let fechaFinal= formatDataToSubmit(fecha)[1]   
                
                let url = `http://localhost:8080/productos/fechaDisponible?fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`
                await axios.get(url).then(response => setDatosFiltrados(response)).catch(r => console.log(r))

            }

        }else if(buscadorFechaVacio){
            ciudad_id = (cod.selectedIndex + 1)
            let url = `http://localhost:8080/productos/ciudad/${ciudad_id}?size=8&page=0`

            await axios.get(url).then(response => setDatosFiltrados(response)).catch(r => console.log(r))

            busqueda(datosFiltrados.data)

        }
    }

    /*const handleChange = e => {
        console.log(e.target);
        if (e.target.name === 'ciudad') { busqueda(e.target.value) }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }*/
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

    const formatDataToSubmit = (dataSinFormatear) => {
        let fInicio, fFin;
        let dataFormateadaFinal
        let dataFormateadaInicio
        if(dataSinFormatear.toString() != ['Invalid Date']){
            [fInicio, fFin] = dataSinFormatear;
            dataFormateadaInicio = `${fInicio.getFullYear()}-${fInicio.getDate()}-${(fInicio.getMonth() + 1)}`
            dataFormateadaFinal = `${fFin.getFullYear()}-${fFin.getDate()}-${(fFin.getMonth() + 1)}`
        }else{
            dataFormateadaInicio = ''
            dataFormateadaFinal = ''
        }


        return [dataFormateadaInicio, dataFormateadaFinal]

    }


    //Array ciudades
    let ciudadesList = [];
    let url = "http://localhost:8080/ciudades/listarTodos?ord=DESC&field=id";
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
                    
                    <span className='icon iconLocation'>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <select name="ciudad" className='input-search' id="ciudades">
                        {ciudadesList.map((e, i) =>
                            (
                                <>
                                {console.log(ciudadesList)}
                                    <option className="iconInput" fecha={e} key={"ciudad_" + i} >{e}
                                    </option>
                                    
                                </>
                            )
                            
                        )}
                    </select>
                </div>
                <div className="iconInput">
                    <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='Check in - Check out' value={(fecha[0] ? formateDate(fecha) : '')} />
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