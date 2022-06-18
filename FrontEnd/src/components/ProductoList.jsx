import React from 'react';
import ProductoCard from './ProductoCard';
// import '../styles/ProductoList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';
import productos from '../productos.json';

const ProductoList = () => {
    let prod = productos.productos
    let url = "http://localhost:8080/productos/listarTodos";
    let { data, isPending, error } = useFetch(url);
    if (isPending) {
        console.log(error);
    }
    console.log(data);
    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Recomendaciones</h2>
                <div className='d-flex justify-content-between align-item-center flex-wrap'>
                    {!data ? <Spinner /> : data.map((prod, i) => {
                        return (i < 8 && <ProductoCard info={prod} key={"prod" + i} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductoList;