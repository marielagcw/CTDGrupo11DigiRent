import React from 'react';
import Card from './Card';
import categorias from '../categorias.json';
import '../styles/CardList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';
let lista = categorias.categorias;

const CardList = () => {

    let url = "http://localhost:8080/categorias";
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    }
    return (
        <>
            <div className="category-container m-3">
                <h2 className='category'>Categorias</h2>
                <div className='d-flex justify-content-between align-item-center'>
                    {!data ? <Spinner /> : data.map((categoria, i) => {
                        return (<Card info={categoria} key={"cat" + i} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default CardList;
