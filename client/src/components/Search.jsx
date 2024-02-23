import React, { useState } from 'react';

function Search() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelectCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    // Add Get-Mapping for Collecting countries out of MongoDB
  ];

  return (
    <div className='flex justify-evenly items-center p-10'>
      <select
        value={selectedCountry}
        onChange={handleSelectCountry}
        className="mr-1 h-10 w-40 rounded-2xl text-center" 
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <input
        placeholder="Search for a recipe"
        type="text"
        className="h-10 rounded-2xl w-52 text-center"
      />
    </div>
  );
}

export default Search;
