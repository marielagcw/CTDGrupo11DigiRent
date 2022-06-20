import React from 'react';
import ProductoCard from './ProductoCard';
// import '../styles/ProductoList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';


const ProductoList = ({ search }) => {

    let url = "http://localhost:8080/productos/listarTodosRandom?size=8&page=0";
    if (search) {
        url = "http://localhost:8080/productos/productosCiudad/listarTodos";
    }

    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    }
    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Recomendaciones</h2>
                <div className='d-flex justify-content-between align-item-center flex-wrap'>
                    {!data ?
                        <Spinner /> :
                        !search ?
                            data.map((prod, i) => {
                                return (i < 8 &&
                                    <ProductoCard info={prod} key={"prod" + i} />)
                            }) :
                            data.map((prod, i) => {
                                return (
                                    prod.ciudad.provincia.includes(search)&&
                                    <ProductoCard info={prod} key={"prod" + i} />)
                            })}
                </div>
            </div>
        </>
    )
}

export default ProductoList;