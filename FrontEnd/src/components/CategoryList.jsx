import React from 'react';
import CategoryCard from './CategoryCard';
import '../styles/CategoryList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';

const urlBase = process.env.REACT_APP_URLBASE;

const CategoryList = ({seleccion,setSeleccion}) => {

    let url = urlBase + "/categorias/listarTodos";
    console.log("url " + url)
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    }
    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Buscar por tipo de alquiler</h2>
                <div className='d-flex justify-content-between align-item-center'>
                    {!data ? <Spinner /> : data.map((categoria, i) => {
                        return (
                            <CategoryCard seleccion={seleccion} setSeleccion={setSeleccion} datos={categoria} key={"cat" + i} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoryList;
