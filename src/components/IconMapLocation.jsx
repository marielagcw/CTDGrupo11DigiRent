import L from 'leaflet';

export const IconMapLocation = new L.Icon({
    iconUrl: require("../img/marker-icon-rojo.png"),
    iconRetinaUrl: require("../img/marker-icon-rojo.png"),
    iconSize: [25, 35],
    iconAnchor: [10, 35],
    popupAnchor: [0, -35],
    /*shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,*/
    className: 'leaflet-venue-icon',
});


