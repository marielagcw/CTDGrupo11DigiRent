import React from 'react';

export default function ProductLocation({productInfo}) {
    
    return(
        <div className="location-prod">
            <h2>{productInfo.nombre}</h2>
            <p>{productInfo.provincia+", "+productInfo.pais}</p>
        </div>
    )
}