const express = require('express');
const User = require('../model/user.js');
const bcrypt = require('bcryptjs');
 
var router = express.Router();

//Create a user
router.post('/', async (req,res) => {
    try {
        const pswd = req.body.password;
        const saltrounds = 10;
        console.log(pswd)
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(pswd, salt);
        console.log(salt,hash)
        const user = new User({
            username: req.body.username,
            password: hash
        });
        user.save()
            .then(data => {
                res.status(200).json({ message: 'User created successfully', data });
            })
            .catch(err => {
                res.status(500).json({ message: `Error creating user ${err.message}` });
            });
    } catch (error) {
        console.error('Fehler beim Verschlüsseln des Passworts:', error);
        res.status(500).json({ error: 'Fehler beim Verschlüsseln des Passworts' });
    }
});


//Find a user
router.get('/:id', function(req,res){
    User.find({userid:req.body.id})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.body.userid
            });            
        }
        res.send(user);
    }).catch(err => {         
        return res.status(500).send({
            message: `Error retrieving user : ${err.message}`
        });
    });
    
});


//Update a user
router.put('/:id', function(req,res){
    // Find note and update it with the request body
    
    User.findOneAndUpdate({userid:req.body.userid}, {
        userid:req.body.userid,
        username: req.body.username,
        password: req.body.password
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.send(user);
    }).catch(err => {        
        return res.status(500).send({
            message: `Error updating user: ${err.message} `
        });
    });
});

//Delete a user
router.delete('/:id',function (req,res){
    User.findOneAndDelete({userid:req.params.id})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found "
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {         
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userid
        });
    });
});

module.exports = router;