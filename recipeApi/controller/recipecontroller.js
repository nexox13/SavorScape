const express = require('express');
const router = express.Router();
const Recipe = require('../model/recipe');

defaultImage = [
  'https://t3.ftcdn.net/jpg/05/97/52/56/360_F_597525620_zgSlP3f0DynQhDdZ26SirWJixlEPL8pn.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwCDM3WxQzEhTJsatZRRpouvaDVusZjBemDPHUsc4nA&s',
  'https://static.demilked.com/wp-content/uploads/2020/11/5face8b75473e-totally-gourmet-food-weird-side-1-5fabfee4bbe62__700.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqP5iK8mX4VX4XbdB2fmvos2rwUQuDULsVJgbyC1g-7A&s'
]

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({})
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Alle Rezepte abrufen Country | Title
router.get('/country/:country', async (req, res) => {
  console.log(req.params.country)
  try {
    const recipes = await Recipe.find({country: req.params.country})
    if (recipes.length != 0) {
      return res.status(200).json({ message: 'Rezept gefunden 😍', recipes });
    }else{
      return res.status(404).json({ message: 'Rezept nicht gefunden ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Rezepte abrufen name & country
router.get('/name/:name', async (req, res) => {
  try {
    const recipes = await Recipe.find({title: req.params.name})
    if (recipes.length != 0) {
      return res.status(200).json({ message: 'Rezept gefunden 😍', recipes });
    }else{
      return res.status(404).json({ message: 'Rezept nicht gefunden ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Rezept abrufen search
router.get('/search/:country/:name', async (req, res) => {
  try {
    const recipes = await Recipe.find({title: req.params.name, country: req.params.country})
    if (recipes.length != 0) {
      return res.status(200).json({ message: 'Rezept gefunden 😍', recipes });
    }else{
      return res.status(404).json({ message: 'Rezept nicht gefunden ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Neues Rezept hinzufügen
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    country: req.body.country,
    title: req.body.title,
    difficulty: req.body.difficulty,
    image: req.body.image || defaultImage[Math.floor(Math.random() * defaultImage.length)],
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });
  console.log(recipe)

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT: Rezept bearbeiten
router.put('/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Rezept löschen
router.delete('/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Rezept gelöscht 😍' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
