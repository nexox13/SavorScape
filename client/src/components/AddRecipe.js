import React from 'react'

const getRecipes = async() => {
    const url = `http://10.115.1.14:3001/api/recipes`
    
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
  };

  getRecipes()

function AddRecipe() {
  return (
    <div>
      Hallo
    </div>
  )
}

export default AddRecipe
