import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useState, useRef, useEffect } from 'react';
import './Map.css';
import { useDispatch } from 'react-redux';

const HungryMap = () => {
    const [map, setMap] = useState();
    const mapRef = useRef();
    const markerRef = useRef();
    const dispatch = useDispatch();

    return (
        <div ref={mapRef} id="map">
            Map
        </div>
        
    )
}
const MapWrapper = () => {
    return (
        <div id="map">
            <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
                <HungryMap></HungryMap>
            </Wrapper>
        </div>
    )
}


const Map = () => {
    const key = process.env.REACT_APP_MAPS_API_KEY;
    const center = { lat: 37.7749, lng: -122.4194 };
    const zoom = 4;

    return (
        <div>
            <h1>from map component thats not mapping sadge</h1>
            <br></br>
            <br></br>
            
            <img src="https://media.tenor.com/gNOZpZvPeHgAAAAC/this-is-not-the-group-youre-looking-for-jedi-mind-trick.gif"></img>
        </div>
        // <div id="map">
        //     <Wrapper apiKey={key} style={{ width: '400px', height: '400px' }}>
        //         <Map style={{ width: '400px', height: '400px' }} center={center} zoom={zoom}></Map>
        //     </Wrapper>
        // </div>
    );
    
    
};

export default Map;