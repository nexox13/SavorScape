import React, { useState } from 'react';

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
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    // Add Get-Mapping for Collecting countries out of MongoDB
  ];

  return (
    <form onSubmit={handleSubmit} className='form-container'>
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
        className="h-10 rounded-2xl text-center"
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
  );
}

export default Search;
