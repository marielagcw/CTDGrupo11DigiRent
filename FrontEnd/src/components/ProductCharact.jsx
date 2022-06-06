import React from 'react';
import '../styles/ProductCharact.css'

export default function ProductCharact({ caract }) {
    let caractetisticas = ['Cocina','Televisor','Aire Acondicionado','Apto p/ Mascotas','Estacionamiento gratuito','Pileta','Wifi']
    return (
        <div id="charact">
            <h2 className='charact-title title'>¿Que ofrece este lugar?</h2>
            <hr className='char-hr' />
            <div className='char-grid'>
                {caractetisticas.map((char,i)=>{
                    return(
                        <div className='grid-item' key={char+i} >
                            {char}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}