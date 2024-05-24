const express = require('express');
const Country = require('../model/country.js');
const router = express.Router();

// Route to check if a country exists in the database
router.get('/:country', async (req, res) => {
    const country = req.params.country;
    console.log(country)

    try {
        const data = await Country.findOne({ name: country });
        console.log(data);

        if (data) {
            res.status(200).json({ message: 'Country exists in the database', data });
        } else {
            res.status(404).json({ message: 'Country does not exist in the database' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while checking the country', error });
    }
});

// Route get all countries
router.get('/', async (req, res) => {
    try {
        const countries = await Country.find({})
        res.json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;