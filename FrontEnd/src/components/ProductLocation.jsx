import React from 'react';

export default function ProductLocation({productInfo}) {
    
    return(
        <div className="location-prod">
            <h2>{productInfo.nombre}</h2>
            <p>{productInfo.pais+", "+productInfo.provincia}</p>
        </div>
    )
}