import React, { useState, useEffect } from 'react';
import ProductoCard from './ProductoCard';
// import '../styles/ProductoList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';


const ProductoList = ({ search, seleccion }) => {
    const [url, setUrl] = useState("http://localhost:8080/productos/listarTodosRandom?size=8&page=0")
    const [busqueda, setBusqueda] = useState(false)

    useEffect(() => {
        let validesBusqueda = (search !== '' && search != null);
        let validesSeleccion = (seleccion !== '' && seleccion != null);

        let endpoint = "http://localhost:8080/productos/listarTodosRandom?size=8&page=0";
        if (validesBusqueda && !seleccion) {
            endpoint = "http://localhost:8080/productos/productosCiudad/listarTodos";
            setBusqueda(true);
        } else if (validesSeleccion && !search) {
            endpoint = "http://localhost:8080/productos/productosCategoria/" + seleccion;
        } else if (validesBusqueda && validesSeleccion) {
            endpoint = "http://localhost:8080/productos/productosCategoria/" + seleccion;
            setBusqueda(true);
        }
        setUrl(endpoint);


    }, [search, seleccion])



    let { data, isPending, error } = useFetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        })
    });
    if (isPending) {
        console.log(error);
    }
    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Recomendaciones</h2>
                <div className='d-flex justify-content-between align-item-center flex-wrap'>
                    {!data ? <Spinner /> : //Si no hay datos, render spinner
                        busqueda ?
                            data.map((prod, i) => { //Si hay busqueda, render filtro 
                                return (
                                    prod.ciudad.provincia.includes(search) &&
                                    <ProductoCard info={prod} key={"prod" + i} />)
                            }) :
                            data.map((prod, i) => {//sino, busuqeda normal o defiltro
                                return (
                                    i < 8 &&
                                    <ProductoCard info={prod} key={"prod" + i} />)
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductoList;