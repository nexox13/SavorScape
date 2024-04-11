import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext';

function AddRecipe() {
  const { colorTheme } = useAppContext();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [difficulty, setDifficulty] = useState(0); // Initial difficulty set to 0

  const handleStarClick = (rating) => {
    setDifficulty(rating);
  };

  const handleChange = (type, value) => {
    switch (type) {
      case 'name':
        setName(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'ingredients':
        setIngredients(value);
        break;
      case 'instructions':
        setInstructions(value);
        break;
      default:
        break;
    }
  };

  const addRecipes = async () => {
    const url = `http://10.115.1.14:3001/api/recipes`;

    const recipeData = {
      name,
      country,
      ingredients,
      instructions,
      difficulty
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeData)
      });

      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }

      const responseData = await response.json();
      console.log(responseData); // Logging the response for now
    } catch (error) {
      console.error('Error adding recipe:', error.message);
    }
  };

  return (
    <span style={{backgroundColor: 'white', fontWeight: 'bold' }}>
      <div className="overflow-auto bg-gray-100 p-4 rounded-xl shadow-md h-auto">
        <h2 className="text-xl font-bold mb-4 flex justify-center">Add a Recipe</h2>
        <input
          className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Recipe name"
          required
        />
        <input
          className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
          value={country}
          onChange={(e) => handleChange('country', e.target.value)}
          placeholder="Recipe country"
          required
        />
        <label htmlFor="difficulty" required>Difficulty:</label>
        <div>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < difficulty ? '#ffc107' : '#e4e5e9'}
              size={25}
              className="inline-block mr-1 cursor-pointer"
              onClick={() => handleStarClick(index + 1)} // Pass index + 1 as rating
            />
          ))}
        </div>
        <textarea
          className={`h-80 my-1.5 w-full px-5 ${colorTheme} min-h-10 p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500`}
          value={ingredients}
          onChange={(e) => handleChange('ingredients', e.target.value)}
          placeholder="Recipe ingredients"
          required
        />
        <textarea
          className={`my-1.5 w-full h-80 min-h-10 px-5 ${colorTheme} p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500`}
          value={instructions}
          onChange={(e) => handleChange('instructions', e.target.value)}
          placeholder="Recipe instructions"
          required
        />

        <button
          className="mt-10 bg-black hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => addRecipes()}
        >
          Add Recipe
        </button>
      </div>
    </span>
  );
}

export default AddRecipe;
