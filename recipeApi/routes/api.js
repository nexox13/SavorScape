const express = require('express');
const router = express();
const { loadDb } = require('../db');
const DB = loadDb();
const usercontroller = require('../controller/usercontroller');
const recipecontroller = require('../controller/recipecontroller');

loadDb();

// Mount user routes
router.use('/user', usercontroller);

// Mount recipe routes
router.use('/recipe', recipecontroller);

module.exports = router;