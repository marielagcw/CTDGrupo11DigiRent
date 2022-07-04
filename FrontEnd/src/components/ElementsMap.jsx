import React from 'react';
import { Marker } from 'react-leaflet';
import {IconMapLocation} from './IconMapLocation';


const ElementsMap = () => {
    return (
        <Marker position={[-34.54511176390258, -58.44975344474727]} icon={IconMapLocation}/>
    );
}

export default ElementsMap;
