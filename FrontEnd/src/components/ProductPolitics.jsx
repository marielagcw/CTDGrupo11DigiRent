import React from 'react';
import '../styles/ProductPolitics.css'


export default function ProductPolitics({ politics }) {
    let politic = [
        {
            'title': "Normas de la Casa",
            'items': [
                "Check-Out: 10pm",
                "No se permiten fiestas",
                "No fumar"]
        },
        {
            'title': "Salud y Seguridad",
            'items': [
                "Se aplican pautas de distanciamiento social y otras normas relacionadas con el Covid-19",
                "Detector de Humo",
                "Deposito de seguridad"]
        },
        {
            'title': "Politica de Cancelación",
            'items': [
                "Agregá las fechas de tu viaje para obtener los detalles de cancelación de la estadia"
            ]
        }
    ]
    return (
        <div id="politics">
            <h2 className='politics-title title'>¿Que tenes que saber?</h2>
            <hr className='pol-hr' />
            <div className='pol-grid'>
                {politic.map((pol, i) => {
                    let arrPol = pol.items;
                    return (
                        <div className="grid-item" key={'pol_title_' + i}>
                            <h4>{pol.title}</h4>
                            <ul
                                className='pol-ul d-flex flex-column justify-content-around allign-items-ceter'
                            >{arrPol.map((e, i) => {
                                return (
                                    <li
                                        className='pol-item'
                                        key={"pol_" + i}>
                                        {e}
                                    </li>
                                )
                            })}</ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}