import React from 'react';
import '../styles/UserInfo.css';
import '../styles/Navbar.css';

export default function UserInfoMobile({userInfo}) {
    const getLogo = () =>{
        let nameLetter = userInfo.name.charAt(0);
        let lastNameLetter = userInfo.lastName.charAt(0);

        return nameLetter.toUpperCase()+lastNameLetter.toUpperCase();
    }
    return(
        <div className="user-info-mobile">
            <div className='user-logo'><span>{getLogo()}</span></div>
            <div className='d-flex flex-column'>
            <span>Hola, </span>
            <span className='user-name'>{userInfo.name+" "+userInfo.lastName}</span>
            </div>
        </div>
    )
}