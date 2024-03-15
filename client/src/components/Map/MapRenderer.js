import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';

function MapRenderer() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXRoc3F1ZXp6IiwiYSI6ImNsdHNpdW1jYzB0bHcya3BjbjMwdGdsOWgifQ.c4VO_Axkkly245AJFz7NmA';
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(9.875);
    const [lat, setLat] = useState(47.40);
    const [zoom, setZoom] = useState(10);

    const initializeMap = useCallback(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false // This will disable Mapbox's default attribution control
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(2));
            setLat(map.current.getCenter().lat.toFixed(2));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [lat, lng, zoom]);

    const handleContextLost = useCallback(() => {
        console.log('WebGL context lost');

        if (map.current) {
            map.current.remove();
            map.current = null;
        }
    }, []);

    const handleContextRestored = useCallback(() => {
        if (!map.current) {
            initializeMap();
        }
    }, [initializeMap]);

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
    }, [map, lat, lng, zoom, handleContextLost, handleContextRestored, initializeMap]);

    return (
        <div>
            <div className="p-2 w-auto fixed bottom-2 left-2 z-50 bg-white rounded-xl" style={{ opacity: 0.65 }}>
                <span style={{ opacity: 1, fontWeight: 'bold' }}>
                    Longitude: {lng} ~ Latitude: {lat} ~ Zoom: {zoom}
                </span>
            </div>
            <div ref={mapContainer} className="h-screen" style={{ zIndex: 1 }} />
        </div>
    );
}

export default MapRenderer;