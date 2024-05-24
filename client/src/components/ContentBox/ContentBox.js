import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import ContentBoxHeader from './ContentBoxHeader';

function ContentBox() {
  const { colorTheme, searchSubmit, selectedCountry, searchedRecipe } = useAppContext();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let url = 'http://10.115.1.14:3001/recipe';
  
      if (selectedCountry && searchedRecipe) {
        url += `/search/${selectedCountry}/${searchedRecipe}`;
      } else if (selectedCountry) {
        url += `/country/${selectedCountry}`;
      } else if (searchedRecipe) {
        url += `/name/${searchedRecipe}`;
      }
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        // Check if data contains recipes array
        if (data.recipes && Array.isArray(data.recipes)) {
          setRecipes(data.recipes);
        } else {
          console.error('Invalid response format:', data);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        // Display user-friendly error message here
      }
    };
  
    if (searchSubmit) {
      fetchRecipes();
    }
  }, [searchSubmit, selectedCountry, searchedRecipe]);

  return (
    <div className='w-full h-full z-50 p-4 opacity-1'>
      {searchSubmit && (
        <div className={`${colorTheme} rounded-lg shadow-md p-4`}>
          <ContentBoxHeader />
          <div className="grid grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <div key={recipe._id} className="recipe-card bg-white mt-8 p-4 rounded-xl">
                <h3 className="font-bold">{recipe.title}</h3>
                <p>{recipe.country}</p>
                <p>{recipe.difficulty}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentBox;
