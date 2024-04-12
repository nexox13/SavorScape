import React from 'react';
import { useAppContext } from '../contexts/AppContext';

function Preferences() {
    const { colorTheme } = useAppContext();
    
    // Handler function to update preferences
    const handleMapLocationChange = (event) => {
        localStorage.setItem('mapLocation', event.target.value);
    };

    return (
        <div className={`${colorTheme} rounded-lg shadow-md p-4 mt-4`}>
            <h1 className="font-bold mb-4">Map-Start Position:</h1>

            <div className="flex">
                <label htmlFor="lng">Your Starting Position</label>
                <select id="lng" onChange={handleMapLocationChange} className="form-control rounded-lg shadow-md p-2 flex bg-white">
                    <option value="TrackLocation">Default</option>
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
