import React from 'react';
import '../styles/Card.css'

const Card = (props) => {
    return (
        <div className="card" >
            <img src={props.info.urlImagen} className="card-img-top" alt={props.info.descripcion} />
            <div className="card-body">
                <h2>{props.info.titulo}</h2>
                <p className="card-text">{props.info.descripcion}</p>
            </div>
        </div>
    )
}
export default Card;
