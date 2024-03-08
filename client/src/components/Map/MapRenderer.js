import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // Remove '!' from here


function MapRenderer(){
    mapboxgl.accessToken = 'pk.eyJ1IjoibXRoc3F1ZXp6IiwiYSI6ImNsdDR0M3VuajA2YmYyam1uZ3lkcm03dnEifQ.K9GepRMOKNZFk2e8zkXTzw';
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // Initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
    
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
    }, [map]);
    

    return (
        <div>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default MapRenderer;