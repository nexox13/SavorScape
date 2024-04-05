import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function AddRecipe() {
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

  return (
    <span style={{ opacity: 1, backgroundColor: 'white', fontWeight: 'bold' }}>
      <div className="overflow-auto bg-gray-100 p-4 rounded-xl shadow-md h-auto">
        <h2 className="text-xl font-bold mb-4 justify-center">Add a Recipe</h2>
        <input
          className="opacity-100 my-1.5 w-full h-1/4 px-5 bg-violet-600 min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Recipe name"
        />
        <input
          className="opacity-100 my-1.5 w-full h-1/4 px-5 bg-violet-600 min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
          value={country}
          onChange={(e) => handleChange('country', e.target.value)}
          placeholder="Recipe country"
        />
        <label htmlFor="difficulty">Difficulty:</label>
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
          className="opacity-100 h-80 my-1.5 w-full h-1/4 px-5 bg-violet-600 min-h-10 p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500"
          value={ingredients}
          onChange={(e) => handleChange('ingredients', e.target.value)}
          placeholder="Recipe ingredients"
        />
        <textarea
          className="opacity-100 my-1.5 w-full h-80 px-5 bg-violet-600 p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500"
          value={instructions}
          onChange={(e) => handleChange('instructions', e.target.value)}
          placeholder="Recipe instructions"
        />
      
      </div>
    </span>
  );
}

export default AddRecipe;
