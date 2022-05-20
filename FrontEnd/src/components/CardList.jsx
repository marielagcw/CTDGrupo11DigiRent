import React from 'react';
import Card from './Card';
import categorias from '../categorias.json';
import '../styles/CardList.css'
let lista = categorias.categorias;

const CardList = () => {

    return (
        <>
            <h2>Categorias</h2>
            <div className='contenedorFlex'>
                {lista.map((categoria) => {
                    return (<Card info={categoria} key={categoria.idCategorias} />)
                })}
            </div>
        </>
    )
}

export default CardList;
