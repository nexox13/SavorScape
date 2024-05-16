const express = require('express');
const User = require('../model/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

var privateKey = process.env.PRIVATE_KEY;
var router = express.Router();

//login
router.post('/', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    
    const userAllowed = await bcrypt.compare(req.body.password, user.password);

    if (userAllowed) {
        const userObject = user.toObject();
        const payload = {
            id: userObject._id,
            username: userObject.username,
            password: userObject.password
        };
        const token = jwt.sign(payload, privateKey, { expiresIn: '1h' });
        res.status(200).json({ message: 'User logged in successfully 😍', token });
    } else {
        res.send('No user found or invalid password 🫨');
    }
});

module.exports = router;