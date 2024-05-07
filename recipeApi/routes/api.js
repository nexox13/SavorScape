const express = require('express');
const router = express();
const { loadDb } = require('../db');
const DB = loadDb();
const usercontroller = require('../controller/usercontroller');
const recipecontroller = require('../controller/recipecontroller');
const logincontroller = require('../controller/logincontroller');

loadDb();

// Mount user routes
router.use('/register', usercontroller);

// Mount login routes
router.use('/login', logincontroller);

// Mount recipe routes
router.use('/recipe', recipecontroller);

module.exports = router;