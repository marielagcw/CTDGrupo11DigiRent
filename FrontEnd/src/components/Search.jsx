import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import '../styles/Navbar.css'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker  from "react-modern-calendar-datepicker";
import NewCalendar from './NewCalendar';


const Search = () => {



    // const [selectedDayRange, setSelectedDayRange] = useState([]);

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
                    {/* <input type="text" className='ms-2 input-search' name="date" id="input-calendar" placeholder='ingrese la fecha' /> */}
                    <NewCalendar />
                    <span className='icon iconCalender'>
                        <FontAwesomeIcon icon={faCalendar}/>
                    </span>
                </div>
                <button className='btn btn-lg btn-primary ms-2'>Aceptar</button>
            </form>
        </div>


    
  </>


  )
}

export default Search