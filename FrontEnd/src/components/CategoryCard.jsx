import React from 'react';
import '../styles/CategoryCard.css'

const CategoryCard = (props) => {
    let data = props.datos;
    return (
        <div className="card categoria" >
            <img src={data.url} className="card-img-top" alt={data.descripcion} />
            <div className="card-body">
                <h2>{data.titulo}</h2>
                <p className="card-text">{data.descripcion}</p>
            </div>
        </div>
    )
}
export default CategoryCard;
