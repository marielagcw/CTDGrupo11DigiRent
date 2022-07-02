import React, { useState, useEffect } from 'react';
import ProductoCard from './ProductoCard';
// import '../styles/ProductoList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';


const ProductoList = ({ search, seleccion }) => {
    const [url, setUrl] = useState("http://localhost:8080/productos/listarTodosRandom?size=8&page=0")
    const [busqueda, setBusqueda] = useState(true)
    const [datos, setDatos] = useState('')

    useEffect(() => {
        let validesBusqueda = (search !== '' && search != null);
        let validesSeleccion = (seleccion !== '' && seleccion != null);

        let endpoint = "http://localhost:8080/productos/listarTodosRandom?size=8&page=0";
        if (validesBusqueda && !seleccion) {
            // endpoint = "http://localhost:8080/productos/productosCiudad/listarTodos";
            endpoint = "http://localhost:8080/productos/ciudad/listarTodos";
            setBusqueda(true);
        } else if (validesSeleccion && !search) {
            // endpoint = "http://localhost:8080/productos/productosCategoria/" + seleccion;
            endpoint = "http://localhost:8080/productos/categoria/" + seleccion;
        } else if (validesBusqueda && validesSeleccion) {
            // endpoint = "http://localhost:8080/productos/productosCategoria/" + seleccion;
            //endpoint = "http://localhost:8080/productos/categoria/" + seleccion;
            
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
                    {!data && !search ? <Spinner /> : //Si no hay datos, render spinner
                        !search ?
                            data.map((prod, i) => { //Si hay busqueda, render filtro 
                                return (
                                    <ProductoCard info={prod} key={"prod" + i} />)
                            }) :
                            search !== '' ?
                                search.map((prod, i) => {//sino, busuqeda normal o defiltro
                                    return (
                                        i < 8 &&
                                        <ProductoCard info={prod} key={"prod" + i} />)
                                }):
                                <h2>No se encontraron datos</h2>
                    }
                </div>
            </div>
        </>
    )
}

export default ProductoList;