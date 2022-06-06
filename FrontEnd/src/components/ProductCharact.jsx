import React from 'react';
import '../styles/ProductCharact.css'
import { BsSnow3,BsWifi } from 'react-icons/bs';
import { TbToolsKitchen } from 'react-icons/tb';
import { FaCar } from 'react-icons/fa';
import { CgScreen } from 'react-icons/cg';
import { MdPets,MdPool } from 'react-icons/md';

export default function ProductCharact({ caract }) {
    let caractetisticas = [{nombre:'Cocina','icon':<TbToolsKitchen />},{nombre:'Televisor',icon:<CgScreen />},{nombre:'Aire Acondicionado',icon:<BsSnow3 />},{nombre:'Apto p/ Mascotas',icon:<MdPets />},{nombre:'Estacionamiento gratuito',icon:<FaCar />},{nombre:'Pileta',icon:<MdPool />},{nombre:'Wifi',icon:<BsWifi />}];
    return (
        <div id="charact">
            <h2 className='charact-title title'>¿Que ofrece este lugar?</h2>
            <hr className='char-hr' />
            <div className='char-grid'>
                {caractetisticas.map((char,i)=>{
                    return(
                        <div className="grid-item">
                            <div className="icono">{char.icon}</div><span>{char.nombre}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}