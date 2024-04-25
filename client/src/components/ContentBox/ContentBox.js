import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import ContentBoxHeader from './ContentBoxHeader';

function ContentBox() {
  const { colorTheme, searchSubmit, selectedCountry, searchedRecipe } = useAppContext();
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes based on selectedCountry and searchedRecipe on component mount or update
  useEffect(() => {
    const fetchRecipes = async () => {
        try {
          const response = await fetch(`/api/recipes?country=${selectedCountry}&search=${searchedRecipe}`);
          const data = await response.json();
          setRecipes(data);
        } catch (error) {
          console.error("Error fetching recipes:", error);
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
              <div key={recipe._id} className="recipe-card">
                {/* Display recipe information here */}
                <img src={recipe.imageUrl} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentBox;
