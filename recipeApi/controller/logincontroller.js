const express = require('express');
const User = require('../model/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var router = express.Router();

//login
router.post('/', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    const userAllowed = await bcrypt.compare(req.body.password, user.password);
    console.log(userAllowed)

    if (userAllowed) {
        const userObject = user.toObject();
        const payload = {
            id: userObject._id,
            username: userObject.username,
            password: userObject.password
        };
        const token = jwt.sign(payload, 'secret-key-shhhh');
        console.log(token);
        res.status(200).json({ message: 'User logged in successfully', token });
    } else {
        res.send('No user found or invalid password');
    }
});

module.exports = router;