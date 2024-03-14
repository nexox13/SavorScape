import React from 'react';
import country from 'country-list-js';

function validCountry(){
    var country_names = country.names();
    var countryInput = document.getElementById('country').value;

    if (!country_names.includes(countryInput)){
        document.getElementById('country')
    }

    console.log(country_names)
}
validCountry()

function inputRecipe() {
  return (
    <div>
      
    </div>
  )
}

export default inputRecipe
