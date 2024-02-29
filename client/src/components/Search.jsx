import React, { useState } from 'react';

import '../index.css';

function Search() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchedRecipe, setSearchedRecipe] = useState('');

  const handleSelectCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSearchRecipeChange = (event) => {
    setSearchedRecipe(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Selected Country:', selectedCountry);
    console.log('Searched Recipe:', searchedRecipe);
  };

  const countries = [
    { label: 'United States', value: 'US', flag: '🇺🇸' },
    { label: 'United Kingdom', value: 'GB', flag: '🇬🇧' },
    { label: 'Canada', value: 'CA', flag: '🇨🇦' },
    { label: 'Australia', value: 'AU', flag: '🇦🇺' },
    { label: 'Germany', value: 'DE', flag: '🇩🇪' },
    { label: 'France', value: 'FR', flag: '🇫🇷' },
    // Add Get-Mapping for Collecting countries out of MongoDB
  ];

  return (
    <div className="p-0.5 h-14 bg-white rounded-2xl opacity-65">
      <form onSubmit={handleSubmit} className='form-container'>
      <select
        value={selectedCountry}
        onChange={handleSelectCountry}
        className="rounded-2xl bg-white hover:cursor-pointer text-center"
        style={{ textAlignLast: 'center' }} 
      >
        <option value="" disabled>Select country</option>
        {countries.map((country) => (
          <option key={country.label} value={country.label} className="hover:cursor-pointer bg-white text-center">
            {country.flag} {country.value}
          </option>
        ))}
      </select>


        <input
          placeholder="Recipe-Name"
          type="text"
          className="h-8 rounded-2xl text-center "
          value={searchedRecipe}
          onChange={handleSearchRecipeChange}
        />
        <button type="submit" className="px-3 py-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search;
