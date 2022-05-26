import React from 'react';
import ProductoCard from './ProductoCard';
// import '../styles/ProductoList.css';
// import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';
import productos from '../productos.json';

const ProductoList = () => {
    let prod = productos.productos
    // let url = "http://localhost:8080/categorias";
    // let { data, isPending, error } = useFetch(url);
    // if (isPending) {
    //     console.log(error);
    // }
    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Recomendaciones</h2>
                <div className='d-flex justify-content-between align-item-center flex-wrap'>
                    {!prod ? <Spinner /> : prod.map((prod, i) => {
                        return (<ProductoCard info={prod} key={"prod" + i} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductoList;