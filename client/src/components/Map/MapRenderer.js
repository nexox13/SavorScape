import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

function MapRenderer() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXRoc3F1ZXp6IiwiYSI6ImNsdDR0M3VuajA2YmYyam1uZ3lkcm03dnEifQ.K9GepRMOKNZFk2e8zkXTzw';
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(9.875);
    const [lat, setLat] = useState(47.40);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        mapboxgl.supported({ failIfMajorPerformanceCaveat: true });

        if (!map.current) {
            initializeMap();
        } else {
            map.current.on('webglcontextlost', handleContextLost);
            map.current.on('webglcontextrestored', handleContextRestored);
        }

        return () => {
            if (map.current) {
                map.current.off('webglcontextlost', handleContextLost);
                map.current.off('webglcontextrestored', handleContextRestored);
            }
        };
    }, [map, lat, lng, zoom]);

    const initializeMap = () => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(2));
            setLat(map.current.getCenter().lat.toFixed(2));
            setZoom(map.current.getZoom().toFixed(2));
        });
    };

    const handleContextLost = () => {
        console.log('WebGL context lost');

        if (map.current) {
            map.current.remove();
            map.current = null;
        }
    };

    const handleContextRestored = () => {
        if (!map.current) {
            initializeMap();
        }
    };


    return (
      <div>
        <div className="p-2 w-auto fixed bottom-2 left-2 z-50 bg-white rounded-xl" style={{ opacity: 0.65 }}>
            <span style={{ opacity: 1, fontWeight: 'bold' }}>
                Longitude: {lng} ~ Latitude: {lat} ~ Zoom: {zoom}
            </span>
        </div>
        <div ref={mapContainer} className="min-h-screen" />

      </div>
  
    );
}

export default MapRenderer;
