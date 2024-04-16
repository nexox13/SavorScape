import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext';
import Icon from './Icon';

function AddRecipe() {
  const { colorTheme } = useAppContext();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [difficulty, setDifficulty] = useState(0); // Initial difficulty set to 0
  const [ingName, setIngName] = useState('')
  const [ingAmount, setIngAmount] = useState ()
  const [ingUnit, setIngUnit] = useState('')

  const units = ['kg','g','l','ml']

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
      case 'instructions':
        setInstructions(value);
        break;
      case 'ingName':
        setIngName(value);
        break;
      case 'ingAmount':
        setIngAmount(value);
        break;
      case 'ingUnit':
        setIngUnit(value);
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

      if(response.ok){
        deleteInput()
      }

      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }

      const responseData = await response.json();
      console.log(responseData); // Logging the response for now
    } catch (error) {
      console.error('Error adding recipe:', error.message);
    }
  };
  
  const deleteInput = () => {
    setName('')
    setCountry('')
    setDifficulty(0)
    setIngAmount()
    setIngUnit('')
    setIngredients([])
    setInstructions('')
    setIngName('')
  }

  const ingredientsArr = () => {
    setIngredients(['name:'+ingName+','+
                    'amount:'+ingAmount+','+
                    'unit:'+ingUnit])
    
  }

  return (
    <span style={{backgroundColor: 'white', fontWeight: 'bold' }}>
      <div className="overflow-auto bg-gray-100 p-4 rounded-xl shadow-md h-auto">
        <h2 className="text-xl font-bold flex justify-center">Add a Recipe</h2>
        <label htmlFor="difficulty" required>Recipe Name:</label>
        <input
          className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Recipe name"
          required
        />

        <label htmlFor="difficulty" required>Recipe Country:</label>
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
              onClick={() => handleStarClick(index + 1)}
            />
          ))}
        </div>

        <label htmlFor="difficulty" required>Ingredients:</label>
        <input
          className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
          value={ingName}
          onChange={(e) => handleChange('ingName', e.target.value)}
          placeholder="Name of Ingredient"
          required
        />
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <input
          className={`${colorTheme} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          value={ingAmount}
          onChange={(e) => handleChange('ingAmount', e.target.value)}
          placeholder="Amount"
          required
        />
        <form className={`w-full flex justify-end`}>
          <select className={`${colorTheme} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
            <option selected>Choose a unit</option>
            {units.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </form>
      </div>
      <Icon label="add">
        <svg 
          className="mt-2"
          stroke="currentColor" 
          fill="currentColor" 
          stroke-width="0" 
          viewBox="0 0 1024 1024" 
          height="1.7em" 
          width="1.7em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
        </svg>
      </Icon>
      
        <label htmlFor="difficulty" required>Instructions:</label>
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
