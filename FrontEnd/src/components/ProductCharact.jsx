import React from 'react';
import '../styles/ProductCharact.css'
import { BsSnow3, BsWifi } from 'react-icons/bs';
import { TbToolsKitchen } from 'react-icons/tb';
import { FaCar } from 'react-icons/fa';
import { CgScreen } from 'react-icons/cg';
import { MdPets, MdPool } from 'react-icons/md';

export default function ProductCharact({ caract }) {
    let caractetisticas = [
        { nombre: 'Cocina', 'icon': <TbToolsKitchen />, render: false },
        { nombre: 'Televisor', icon: <CgScreen />, render: false },
        { nombre: 'Aire Acondicionado', icon: <BsSnow3 />, render: false },
        { nombre: 'Apto p/ Mascotas', icon: <MdPets />, render: false },
        { nombre: 'Estacionamiento gratuito', icon: <FaCar />, render: false },
        { nombre: 'Pileta', icon: <MdPool />, render: false },
        { nombre: 'Wifi', icon: <BsWifi />, render: false }
    ];
    caract.forEach((e) => {
        switch (e.nombre) {
            case 'Cocina':
                caractetisticas[0].render = e.estaDisponible;
                break;
            case 'Televisor':
                caractetisticas[1].render = e.estaDisponible;
                break;
            case 'Aire Acondicionado':
                caractetisticas[2].render = e.estaDisponible;
                break;
            case 'Apto p/ Mascotas':
                caractetisticas[3].render = e.estaDisponible;
                break;
            case 'Estacionamiento gratuito':
                caractetisticas[4].render = e.estaDisponible;
                break;
            case 'Pileta':
                caractetisticas[5].render = e.estaDisponible;
                break;
            case 'Wifi':
                caractetisticas[6].render = e.estaDisponible;
                break;
            default:
                break;
        }
    })
    return (
        <div id="charact">
            <h2 className='charact-title title'>¿Que ofrece este lugar?</h2>
            <hr className='char-hr' />
            <div className='char-grid'>
                {caractetisticas.map((char, i) => {
                    return ((char.render) &&
                        <div key={"char_item_" + i} className="grid-item">
                            <div className="icono">
                                {char.icon}
                            </div><span>{char.nombre}</span>
                        </div>)
                })}
            </div>
        </div>
    )
}