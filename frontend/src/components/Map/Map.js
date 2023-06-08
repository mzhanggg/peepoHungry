import React, { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBusiness } from '../../store/businessReducer';
import './Map.css';

const MapWrapper = () => {
    const { businessId } = useParams();
    const business = useSelector(getBusiness(businessId));
    const lat = business.lat;
    const lng = business.long;
    const key = process.env.REACT_APP_MAPS_API_KEY;
    const center = { lat: lat, lng: lng };
    const zoom = 15;

    return (
        <div id="map">
          <Wrapper apiKey={key}>
            <Map zoom={zoom} center={center}></Map>
          </Wrapper>
        </div>
      );
};
    


const Map = ({center, zoom}) => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center,
            zoom
        })

        const marker = new window.google.maps.Marker({position: center, map: map})
        
        // markerRef.current = marker

    }, [center, zoom])

    return (
        <div style={{ width: '300px', height: '200px' }} ref={mapRef}></div>
    );
    
};

export default MapWrapper;