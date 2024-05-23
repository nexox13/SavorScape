const express = require('express');
const router = express();
const { loadDb } = require('../db');
const DB = loadDb();
const usercontroller = require('../controller/usercontroller');
const recipecontroller = require('../controller/recipecontroller');
const logincontroller = require('../controller/logincontroller');
const countrycontroller = require('../controller/countrycontroller');

loadDb();

// Mount user routes
router.use('/register', usercontroller);

// Mount login routes
router.use('/login', logincontroller);

// Mount recipe routes
router.use('/recipe', recipecontroller);

// Mount country routes
router.use('/countries', countrycontroller);

module.exports = router;