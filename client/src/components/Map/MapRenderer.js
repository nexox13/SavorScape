import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import mapboxgl from 'mapbox-gl';

function MapRenderer() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXRoc3F1ZXp6IiwiYSI6ImNsdHNpdW1jYzB0bHcya3BjbjMwdGdsOWgifQ.c4VO_Axkkly245AJFz7NmA';
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [zoom, setZoom] = useState(10);
    const [locationChecked, setLocationChecked] = useState(false);

    const { mapTheme } = useAppContext();

    const initializeMap = useCallback(() => {
        if (map.current) {
            map.current.remove();
        }

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapTheme,
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false // This will disable Mapbox's default attribution control
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(2));
            setLat(map.current.getCenter().lat.toFixed(2));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [mapTheme, lng, lat, zoom]);

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
        }
    
        if (!locationChecked && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLng(position.coords.longitude);
                setLat(position.coords.latitude);
                setLocationChecked(true);
            }, (error) => {
                console.error('Error getting geolocation:', error);
            });
        } else if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser.');
        }
    
        return () => {
            if (map.current) {
                map.current.off('webglcontextlost', handleContextLost);
                map.current.off('webglcontextrestored', handleContextRestored);
            }
        };
    }, [initializeMap, locationChecked]);
    
    useEffect(() => {
        if (map.current) {
            map.current.setStyle(mapTheme);
        }
    }, [mapTheme]);

    return (
        <div>
            <div className="p-2 w-auto fixed bottom-2 left-2 z-50 bg-white rounded-xl" style={{ opacity: 0.65 }}>
                <span style={{ opacity: 1, fontWeight: 'bold' }}>
                    Longitude: {lng !== null ? lng : 'Loading...'} ~ Latitude: {lat !== null ? lat : 'Loading...'} ~ Zoom: {zoom}
                </span>
            </div>
            <div ref={mapContainer} className="h-screen" style={{ zIndex: 1 }} />
        </div>
    );
}

export default MapRenderer;
