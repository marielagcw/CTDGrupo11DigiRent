import React from 'react';
import '../styles/ProductoCard.css'

const ProductoCard = (props) => {
    let info = props.info;
    return (
        <div className="card producto" >
            <img src={info.img} className="card-img-top" alt={info.description} />
            <div className="card-body ">
                <h3 className='title'>{info.title}</h3>
                <h4 className='category'>{info.category}</h4>
                <h5 className='location'>{info.location}</h5>
                <p className="card-text description">{info.description}</p>
                <button type="button" class="btn btn-primary">Ver detalle</button>
            </div>
        </div>
    )
}
export default ProductoCard;
