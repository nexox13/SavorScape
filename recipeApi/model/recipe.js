const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
      },
      unit: {
        type: String,
      },
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model('savorscape', recipeSchema);

module.exports = Recipe;
