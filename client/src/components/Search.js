import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

import '../index.css';

function Search() {
  const { setSelectedCountry, setSearchedRecipe, setSearchSubmit } = useAppContext();
  const [selectedCountryInput, setSelectedCountryInput] = useState('');
  const [searchedRecipeInput, setSearchedRecipeInput] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('country.csv');
        const data = await response.text();
        const parsedData = parseCSVData(data);
        setCountries(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  const parseCSVData = (csvData) => {
    const lines = csvData.trim().split('\n');
    const countriesData = lines.map((line) => {
      const [id, value] = line.split(',');
      if (value === undefined) {
        console.warn('Skipping line:', line);
        return null; // Skip this line if value is undefined
      }
      return { label: value.trim().replace(/"/g, ''), value: id.trim() };
    }).filter(Boolean); // Filter out null values
    return countriesData;
  };
  

  const handleSelectCountryChange = (event) => {
    setSelectedCountryInput(event.target.value);
  };

  const handleSearchRecipeChange = (event) => {
    setSearchedRecipeInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedCountryInput === '' && searchedRecipeInput === '') {
      console.log("Please insert a country or a recipe");
    } else {
      setSearchSubmit(true);
      console.table({ selectedCountryInput, searchedRecipeInput });
      setSelectedCountry(selectedCountryInput);
      setSearchedRecipe(searchedRecipeInput);

      setSelectedCountryInput('');
      setSearchedRecipeInput('');
    }
  };

  return (
    <div className="p-0.5 h-14 bg-white rounded-2xl opacity-100">
      <form onSubmit={handleSubmit} className='form-container'>
        <select
          value={selectedCountryInput}
          onChange={handleSelectCountryChange}
          className="rounded-2xl bg-white hover:cursor-pointer text-center"
          style={{ textAlignLast: 'center' }} 
        >
          <option value="" disabled>Select country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.value} className="hover:cursor-pointer bg-white text-center">
              {country.label}
            </option>
          ))}
        </select>

        <input
          placeholder="Recipe-Name"
          type="text"
          className="h-8 rounded-2xl text-center "
          value={searchedRecipeInput}
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
