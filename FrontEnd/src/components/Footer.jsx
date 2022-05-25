import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <footer className='d-flex justify-content-between aling-items-center container'>
            <p>© 2022 DigiRent, Inc.</p>
            <div className="icons">
                <FontAwesomeIcon className='iconFooter' icon={faFacebook}/>
                <FontAwesomeIcon className='ms-3 iconFooter' icon={faLinkedin}/>
                <FontAwesomeIcon className='ms-3 iconFooter' icon={faTwitter}/>
                <FontAwesomeIcon className='ms-3 iconFooter' icon={faInstagram}/>
            </div>
        </footer>
    </div>
  )
}

export default Footer