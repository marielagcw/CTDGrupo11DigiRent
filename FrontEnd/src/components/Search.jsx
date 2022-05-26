import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import '../styles/Navbar.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Search.css'



const Search = () => {

    const [widthWindow, setWidthWindow] = useState(0);

    useEffect(() => {
      const detectarWidth = (e) => { setWidthWindow(window.visualViewport.width)};
      window.addEventListener('resize', (e) => detectarWidth())
      return () => {
        window.removeEventListener('resize', detectarWidth())
      }
    }, [widthWindow])

    const [value, onChange] = useState(new Date([]));
    
    const sendCalendar = (e) =>{
        e.preventDefault()
        if(value.length > 1){
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


  return (<>
    <div className="searchContainer">
            <form action="POST" className='d-flex align-items-center pt-3'>
                <div className="iconInput">
                    <input className='input-search' type="text"  placeholder='¿A donde vamos?' />
                    <span className='icon iconLocation'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </span>
                </div>
                <div className="iconInput">
                    <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='Check in - Check out' value={value[0] ? `${value[0].getDate()}/${value[0].getMonth() + 1} - ${value[1].getDate()}/${value[1].getMonth() + 1}`: ''}/>
                    <span onClick={showCalendar} className='icon iconCalender'>
                        <FontAwesomeIcon icon={faCalendar}/>
                    </span>
                    <div className='calandary-container d-none form-absolute'>
                        <Calendar showDoubleView={widthWindow > 414 ? true : false} selectRange={true} onChange={onChange} defaultValue={Date([]) | Date()} />
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