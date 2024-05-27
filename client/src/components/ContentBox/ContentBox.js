import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import ContentBoxHeader from './ContentBoxHeader';

function ContentBox() {
  const { colorTheme, searchSubmit, selectedCountry, searchedRecipe } = useAppContext();
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

        if (data.recipes && Array.isArray(data.recipes)) {
          setRecipes(data.recipes);
        } else {
          console.error('Invalid response format:', data);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    if (searchSubmit) {
      setRecipes([]);
      fetchRecipes();
      console.log(recipes);
    }
  }, [searchSubmit, selectedCountry, searchedRecipe]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="w-full h-full z-50 p-4 opacity-1">
      {searchSubmit && (
        <div className={`${colorTheme} rounded-lg shadow-md p-4 max-h-[calc(100vh-16vh)] overflow-y-auto`}>
          <ContentBoxHeader />
          {selectedRecipe ? (
            <div className="recipe-detail bg-white p-4 rounded-xl shadow-sm mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <button onClick={handleBackClick} className="mb-4 px-4 py-2 bg-gray-200 rounded">Back</button>
              <h2 className="font-bold text-2xl">{selectedRecipe.title}</h2>
              <p><strong>Country:</strong> {selectedRecipe.country}</p>
              <p><strong>Difficulty:</strong> {selectedRecipe.difficulty}</p>
              <p><strong>Ingredients:</strong></p>
              <ul className="list-disc list-inside">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
              <p><strong>Instructions:</strong></p>
              <p>{selectedRecipe.instructions}</p>
            </div>
            <div className="text-center">
              <img src={selectedRecipe.image} alt={selectedRecipe.title}/>
            </div>
          </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {recipes.map((recipe) => (
                <div 
                  key={recipe._id} 
                  className="recipe-card bg-white mt-8 p-4 rounded-xl shadow-sm cursor-pointer"
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <h3 className="font-bold text-lg">{recipe.title}</h3>
                  <p>{recipe.country}</p>
                  <img src={recipe.image} alt={recipe.title} height="300" width="300px" />                
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ContentBox;
