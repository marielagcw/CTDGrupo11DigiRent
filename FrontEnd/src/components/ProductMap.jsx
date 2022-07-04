import React, {useState, useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../styles/ProductMap.css';


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
                <Marker
                    title= "Estadio Monumental"
                    position={[-34.54511176390258, -58.44975344474727]}
                    Popup={
                        <div>
                            <p>Estadio Monumental</p>
                        </div>
                    }
                />
                </MapContainer>
            </div>
        </div>
    );
}




