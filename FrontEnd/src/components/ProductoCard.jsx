import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductoCard.css'

const ProductoCard = (props) => {
    let {id_producto,nombre_producto,titulo_descripcion,descripcion,imagenes,categorias,ciudades,caracteristicas,politicas} = {...props.info};
    let urlImg =' https://images.unsplash.com/photo-1605549339992-83721992836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80';
    const navigate = useNavigate();
    return (
        <div className="card producto mb-3" >
            <img src={imagenes[0].url} className="card-img-top" alt={descripcion} />
            <div className="card-body ">
                <h3 className='title'>{titulo_descripcion}</h3>
                <h4 className='category'>{categorias.titulo}</h4>
                <h5 className='location'>{ciudades.nombre + ", " + ciudades.provincia}</h5>
                <p className="card-text description">{descripcion}</p>
                <button type="button" className="btn btn-primary" onClick={() => navigate('/products')}>Ver detalle</button>
            </div>
        </div>
    )
}
export default ProductoCard;
