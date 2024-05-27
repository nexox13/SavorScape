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
  difficulty: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true,
    default: 'https://t3.ftcdn.net/jpg/05/97/52/56/360_F_597525620_zgSlP3f0DynQhDdZ26SirWJixlEPL8pn.jpg'
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;
