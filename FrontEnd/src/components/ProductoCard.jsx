import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductoCard.css'

const ProductoCard = (props) => {
    
    let { id,
        tituloDescripcion,
        descripcion,
        imagenes,
        categoria,
        ciudad } = { ...props.info };
    const navigate = useNavigate();
    return (
        <div className="card producto mb-3" >
            <img src={imagenes[0].url} className="card-img-top" alt={descripcion} />
            <div className="card-body ">
                <h3 className='title overflow-ellipsis'>{tituloDescripcion}</h3>
                <h4 className='category overflow-ellipsis'>{categoria.titulo}</h4>
                <h5 className='location overflow-ellipsis'>{ciudad.nombre + ", " + ciudad.provincia}</h5>
                <p className="card-text description">{descripcion}</p>
                <button type="button" className="btn btn-primary" onClick={() => navigate('/products/'+id)}>Ver detalle</button>
            </div>
        </div>
    )
}
export default ProductoCard;
