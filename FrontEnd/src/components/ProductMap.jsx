import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import '../styles/ProductMap.css';
import 'leaflet/dist/leaflet.css';
import ElementsMap from './ElementsMap';

const ProductMap = () => {
    return (
        <div id="map">
            <h2 className='map-title title'>¿Dónde vas a estar?</h2>
            <hr className='map-hr' />
            <div className = "mapa-contenedor">
                <MapContainer center={[-34.54508863095704, -58.44979770434816]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"   
                    attribution='@ Openstreetmap contributors'  
                />
                <ElementsMap />
                </MapContainer>
            </div>
        </div>
    );
}

export default ProductMap;





