import React from 'react';
import Card from './Card';
import categorias from '../categorias.json';
import '../styles/CardList.css'
let lista = categorias.categorias;

const CardList = () => {

    return (
        <>
        <div className="category-container m-3">
            <h2 className='category'>Categorias</h2>
            <div className='d-flex justify-content-between align-item-center'>
                {lista.map((categoria) => {
                    return (<Card info={categoria} key={categoria.idCategorias} />)
                })}
            </div>
        </div>
        </>
    )
}

export default CardList;
