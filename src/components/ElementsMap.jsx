import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import {IconMapLocation} from './IconMapLocation';


const ElementsMap = () => {
    return (
        <Marker position={[-34.54508863095704, -58.44979770434816]} icon={IconMapLocation}>
            <Popup>
                Estadio Monumental <br /> Vamos River!!!
            </Popup>
        </Marker>
    );
}

export default ElementsMap;
