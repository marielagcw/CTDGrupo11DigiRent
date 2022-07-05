import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserInfo.css';
import '../styles/Navbar.css';
 import { MostrarSegunRol } from './MostrarSegunRol';

export default function UserInfo({userInfo}) {
    const navigate = useNavigate();
    const getLogo = () =>{
        let nameLetter = userInfo.name.charAt(0);
        let lastNameLetter = userInfo.lastName.charAt(0);

        return nameLetter.toUpperCase()+lastNameLetter.toUpperCase();
    }
    const cierreSesion = () =>{
        let storage = window.localStorage;
        storage.clear();
    }
    return(
        <div className="user-info">
{/*             {btn !== 'admin' && <Link to='/admin'>
                <button className='btn btn-lg btn-border-primary' id='userAdmin'>Administración</button>
                </Link>} */}
             <MostrarSegunRol rol="Administrador">
                <a id="btn-admin" className="text-link" href="/admin">Administración</a>
            </MostrarSegunRol> 
            <div id="logo-span" className='user-logo'><span>{getLogo()}</span></div>
            <div className='d-flex flex-column'>
            <span id="info-us">Hola, </span>
            <span id="info-us" className='user-name'>{userInfo.name+" "+userInfo.lastName}</span>
            </div>
            <button type="button" id='cierre-session' className="btn-close btn-close-black" aria-label="Close" onClick={() => {cierreSesion(); navigate('/')}}></button>
        </div>
    )
}