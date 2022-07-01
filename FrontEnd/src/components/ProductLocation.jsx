import React from 'react';
import { BsFillGeoAltFill } from 'react-icons/bs';

export default function ProductLocation({productInfo}) {
    
    return(
        <div className="location-prod">
            <BsFillGeoAltFill />
            <div>
                <h2>{productInfo.nombre}</h2>
                <p>{productInfo.provincia+", "+productInfo.pais}</p>
            </div>
        </div>
    )
}