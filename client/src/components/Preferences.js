import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

function Preferences() {
    const { colorTheme } = useAppContext();
    const [savedLocation, setSavedLocation] = useState(localStorage.getItem('mapLocation') || 'TrackLocation');
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);

    // Handler function to update preferences
    const handleMapLocationChange = (event) => {
        const selectedLocation = event.target.value;
        localStorage.setItem('mapLocation', selectedLocation);
        setSavedLocation(selectedLocation);
    };

    useEffect(() => {
        switch (savedLocation) {
            case 'TrackLocation':
                // Logic to get current location coordinates
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setLng(position.coords.longitude);
                        setLat(position.coords.latitude);
                    });
                }
                break;
            case 'Europe':
                setLng(10);
                setLat(50);
                break;
            case 'Asia':
                setLng(100);
                setLat(40);
                break;
            case 'SouthAmerica':
                setLng(-60);
                setLat(-20);
                break;
            case 'NorthAmerica':
                setLng(-100);
                setLat(40);
                break;
            default:
                // Default case if the selected location is not recognized
                setLng();
                setLat();
                break;
        }
    }, [savedLocation]);

    useEffect(() => {
        localStorage.setItem('lng', lng.toString());
        localStorage.setItem('lat', lat.toString());
        console.log('lng:', lng, 'lat:', lat);
    }, [lng, lat]);

    return (
        <div className={`${colorTheme} rounded-lg shadow-md p-4 mt-4`}>
            <h1 className="font-bold mb-4">Map-Start Position:</h1>

            <div className="flex">
                <label htmlFor="lng">Your Starting Position</label>
                <select id="lng" value={savedLocation} onChange={handleMapLocationChange} className="form-control rounded-lg shadow-md p-2 flex bg-white">
                    <option value="TrackLocation">Track Location</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="SouthAmerica">South America</option>
                    <option value="NorthAmerica">North America</option>
                </select>
            </div>
        </div>
    );
}

export default Preferences;
