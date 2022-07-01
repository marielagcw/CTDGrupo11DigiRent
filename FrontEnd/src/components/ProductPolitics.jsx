import React from 'react';
import '../styles/ProductPolitics.css'


export default function ProductPolitics({ politics }) {
    return (
        <div id="politics">
            <h2 className='politics-title title'>¿Que tenes que saber?</h2>
            <hr className='pol-hr' />
            <div className='pol-grid'>
                {politics.map((pol, i) => {
                    let arrPol = pol.elementos;
                    return (
                        <div key={'pol_title_' + i}>
                            <h4 id="titulo-politicas">{pol.titulo}</h4>
                            <ul
                                className='pol-ul d-flex flex-column justify-content-around allign-items-ceter'
                            >{arrPol.map((e, i) => {
                                return (
                                    <li
                                        id="elem-politicas"
                                        key={"pol_" + i}>
                                        {e.nombre}
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