import React, { useState, useEffect } from 'react';
import ProductoCard from './ProductoCard';
// import '../styles/ProductoList.css';
import { useFetch } from "../hooks/useFetch";
import Spinner from './Spinner';


const ProductoList = ({ search, seleccion, fechaFilter }) => {
    const [url, setUrl] = useState("http://localhost:8080/productos/listarTodosRandom?size=8&page=0")
    const [busqueda, setBusqueda] = useState(false)
    const validesBusqueda = (search !== '' && search != null);
    const validesSeleccion = (seleccion !== '' && seleccion != null);
    useEffect(() => {


        let endpoint = "http://localhost:8080/productos/listarTodosRandom?size=8&page=0";

        if (validesBusqueda && !validesSeleccion) {
            // endpoint = "http://localhost:8080/productos/productosCiudad/listarTodos";
            endpoint = "http://localhost:8080/productos/ciudad/listarTodos";
            setBusqueda(true);
        }
        if (validesSeleccion && !validesBusqueda) {
            // endpoint = "http://localhost:8080/productos/productosCategoria/" + seleccion;
            endpoint = "http://localhost:8080/productos/categoria/" + seleccion;
            setBusqueda(false);
        }
        if (validesBusqueda && validesSeleccion) {
            // endpoint = "http://localhost:8080/productos/productosCategoria/" + seleccion;
            endpoint = "http://localhost:8080/productos/categoria/" + seleccion;
            setBusqueda(true);
        }
        setUrl(endpoint);


    }, [search, seleccion, fechaFilter])


    let { data, isPending, error } = useFetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        })
    });
    if (isPending) {
        console.log(error);
    }
    const busquedaConDate = (fechaFilter) => {
        let band = fechaFilter.length > 0;
        // debugger;
        let render =
            !band ?// SIN FECHA FILTRO NORMAL
                (validesBusqueda ?//Si hay busqueda, render filtro 
                    data.map((prod, i) => {
                        console.log("busqueda");
                        return (
                            prod.ciudad.provincia.includes(search) &&
                            <ProductoCard info={prod} key={"prod" + i} />)
                    })
                    ://sino, busuqeda normal o defiltro
                    data.map((prod, i) => {
                        console.log("NO busqueda");
                        return (
                            i < 8 &&
                            <ProductoCard info={prod} key={"prod" + i} />)
                    })
                )
                :
                (// CON FECHA FILTRO ESPECIAL

                    validesBusqueda ?
                        data.map((prod, i) => {
                            console.log("fecha busqueda");
                            return (
                                prod.ciudad.provincia.includes(search) && fechaFilter.includes(prod.id) &&
                                <ProductoCard info={prod} key={"prod" + i} />)
                        })
                        :
                        data.map((prod, i) => {
                            console.log("fecha");
                            return (
                                i < 8 && fechaFilter.includes(prod.id) &&
                                <ProductoCard info={prod} key={"prod" + i} />)
                        })
                )
        return render
    }
    return (
        <>
            <div className="category-container m-3">
                <h2 className='list-title category'>Recomendaciones</h2>
                <div className='d-flex justify-content-between align-item-center flex-wrap'>
                    {!data ? <Spinner /> : busquedaConDate(fechaFilter)}

                </div>
            </div>
        </>
    )
}

export default ProductoList;