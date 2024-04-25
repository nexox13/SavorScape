const express = require('express');
const router = express.Router();
const Recipe = require('../model/recipe');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({})
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Alle Rezepte abrufen Land
router.get('/:country', async (req, res) => {
  try {
    const recipes = await Recipe.find({land: req.body.country})
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Rezepte abrufen name
router.get('/:name', async (req, res) => {
  try {
    const recipes = await Recipe.find({name: req.body.name})
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Neues Rezept hinzufügen
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    country: req.body.country,
    title: req.body.title,
    // image: req.body.image,
    preparationtime: req.body.preparationtime,
    difficulty: req.body.difficulty,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });

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
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Rezept löschen
router.delete('/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: 'Rezept gelöscht' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
