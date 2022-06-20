import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductoCard.css'

const ProductoCard = (props) => {
    let { id_producto,
        titulo_descripcion,
        descripcion,
        imagenes,
        categorias,
        ciudades } = { ...props.info };
    const navigate = useNavigate();
    return (
        <div className="card producto mb-3" >
            <img src={imagenes[0].url} className="card-img-top" alt={descripcion} />
            <div className="card-body ">
                <h3 className='title'>{titulo_descripcion}</h3>
                <h4 className='category'>{categorias.titulo}</h4>
                <h5 className='location'>{ciudades.nombre + ", " + ciudades.provincia}</h5>
                <p className="card-text description">{descripcion}</p>
                <button type="button" className="btn btn-primary" onClick={() => navigate('/products/'+id_producto)}>Ver detalle</button>
            </div>
        </div>
    )
}
export default ProductoCard;
