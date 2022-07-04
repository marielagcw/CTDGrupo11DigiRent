import React from 'react';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import '../styles/ProductMap.css';
import ElementsMap from './ElementsMap';

export default function ProductMap () {
    return (
        <div id="map">
            <h2 className='map-title title'>¿Dónde vas a estar?</h2>
            <hr className='map-hr' />
            <div className = "mapa-contenedor">
                <MapContainer center={[-34.6037, -58.3816]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"   
                    attribution='@ Openstreetmap contributors'  
                />
                <ElementsMap/>
                </MapContainer>
            </div>
        </div>
    );
}




