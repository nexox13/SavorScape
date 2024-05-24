import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext';
import Icon from './Icon';

function AddRecipe() {
  const { colorTheme, loggedIn } = useAppContext();

  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '', unit: '' }]);
  const [instructions, setInstructions] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const units = ['kg', 'g', 'l', 'ml'];

  const handleStarClick = (rating) => {
    setDifficulty(rating);
  };

  const handleChange = (index, type, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][type] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: '' }]);
  };

  const removeIngredient = (index) => {
    if (index !== 0) {
      const newIngredients = [...ingredients];
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
    }
  };

  const validateCountry = async (country) => {
    try {
      const response = await fetch(`http://10.115.1.14:3001/countries/${country}`);
      if (response.status === 200) {
        console.log("Country exists in the database")
        return true;
      } else if (response.status === 404) {
        return false;
      }
    } catch (error) {
      console.error('Error validating country:', error);
      return false;
    }
  };

  const validateInputs = async () => {
    const errors = {};
    if (!title.trim()) {
      errors.title = 'Title is required';
    }
    if (!country.trim()) {
      errors.country = 'Country is required';
    } else {
      const isValidCountry = await validateCountry(country.trim());
      if (!isValidCountry) {
        errors.country = 'Invalid country';
      }
    }
    if (ingredients.some((ingredient) => !ingredient.name.trim() || !ingredient.amount.trim() || !ingredient.unit.trim())) {
      errors.ingredients = 'All ingredient fields are required';
    }
    if (!instructions.trim()) {
      errors.instructions = 'Instructions are required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetInput = () => {
    setTitle('');
    setCountry('');
    setIngredients([{ name: '', amount: '', unit: '' }]);
    setInstructions('');
    setDifficulty(0);
  };

  const addRecipes = async (e) => {

    if (!loggedIn) { // Check if the form can be submitted
      setSubmitErrorMessage('Form submission is currently disabled, Login to submit a recipe');
      return;
    }

    e.preventDefault();
    if (!(await validateInputs())) {
      return;
    }
    const url = `http://10.115.1.14:3001/recipe/`;
    const recipeData = {
      country,
      title,
      difficulty,
      ingredients,
      instructions,

    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }
      if (response.ok) {
        resetInput();
      }

      const responseData = await response.json();
      console.log(responseData); // Logging the response for now
    } catch (error) {
      console.error('Error adding recipe:', error.message);
    }
  };

  return (
    <span style={{ backgroundColor: 'white', fontWeight: 'bold' }}>
      <div className="overflow-auto bg-gray-100 p-4 rounded-xl shadow-md h-auto mt-4">
        <h2 className="text-xl font-bold flex justify-center">Add a Recipe</h2>
        <label htmlFor="title" required>
          Recipe Name:
        </label>
        <input
          className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe name"
          required
        />
        {errors.title && <p className="text-red">{errors.title}</p>}

        <label htmlFor="country" required>
          Recipe Country:
        </label>
        <input
          className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Recipe country"
          required
        />
        {errors.country && <p className="text-red">{errors.country}</p>}

        <label htmlFor="difficulty" required>
          Difficulty:
        </label>
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
        {errors.difficulty && <p className="text-red">{errors.difficulty}</p>}

        <label htmlFor="ingredients" required>
          Ingredients:
        </label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              className={`my-1.5 w-full h-1/4 px-5 ${colorTheme} min-h-10 max-h-96 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500`}
              value={ingredient.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              placeholder="Name of Ingredient"
              required
            />
            <div className="w-full flex justify-end">
              <input
                className={`${colorTheme} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                value={ingredient.amount}
                type="number"
                onChange={(e) => handleChange(index, 'amount', e.target.value)}
                placeholder="Amount"
                required
              />
              <select
                className={`${colorTheme} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                value={ingredient.unit}
                onChange={(e) => handleChange(index, 'unit', e.target.value)}
              >
                <option value="">Choose a unit</option>
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            
          </div>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex">
          <Icon label="add" onClick={addIngredient}>
            <svg
              className="mt-2"
              stroke="green"
              fill="green"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1.7em"
              width="1.7em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            </svg>
          </Icon>
          {ingredients.length > 1 && ( 
            <Icon label="remove" onClick={() => removeIngredient(ingredients.length - 1)}>
              <svg
                className="mt-2"
                stroke="red"
                fill="red"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.8em"
                width="1.8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                <path d="M363 277H149v-42h214v42z"></path>
              </svg>
            </Icon>
          )}
        </div>
        {errors.ingredient && <p className="text-red">{errors.ingredient}</p>}

        <label htmlFor="instructions" required>
          Instructions:
        </label>
        <textarea
          className={`my-1.5 w-full h-80 min-h-10 px-5 ${colorTheme} p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500`}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Recipe instructions"
          required
        />
        {errors.instructions && <p className="text-red">{errors.instructions}</p>}

        <button
          className="mt-10 bg-black hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={(e) => addRecipes(e)}
        >
          Add Recipe
        </button>

      </div>

      <div className='text-red mt-4'>{submitErrorMessage}</div>

    </span>
  );
}

export default AddRecipe;
