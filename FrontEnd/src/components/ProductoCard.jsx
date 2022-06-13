import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import '../styles/ProductoCard.css'

const ProductoCard = (props) => {
    let info = props.info;
    const navigate = useNavigate();
    return (
        <div className="card producto mb-3" >
            <img src={info.img} className="card-img-top" alt={info.description} />
            <div className="card-body ">
                <h3 className='title'>{info.title}</h3>
                <h4 className='category'>{info.category}</h4>
                <h5 className='location'>{info.location}</h5>
                <p className="card-text description">{info.description}</p>
                <button type="button" className="btn btn-primary" onClick={()=>navigate('/products')}>Ver detalle</button>
            </div>
        </div>
    )
}
export default ProductoCard;
