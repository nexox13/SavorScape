const express = require('express');
const User = require('../model/user.js');
const bcrypt = require('bcryptjs');
 
var router = express.Router();

//Create a user
router.post('/', async (req,res) => {
    try {
        const pswd = req.body.password;
        const saltrounds = 10;
        const salt = await bcrypt.genSalt(saltrounds);
        const hash = await bcrypt.hash(pswd, salt);
        const user = new User({
            username: req.body.username,
            password: hash
        });
        user.save()
            .then(data => {
                res.status(200).json({ message: 'User created successfully 😍', data });
            })
            .catch(err => {
                res.status(500).json({ message: `Error creating user 🫨 ${err.message}` });
            });
    } catch (error) {
        console.error('Fehler beim Verschlüsseln des Passworts 🫨:', error);
        res.status(500).json({ error: 'Fehler beim Verschlüsseln des Passworts 🫨' });
    }
});


//Find a user
router.get('/:id', function(req,res){
    User.findOne({_id:req.params.id})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found 🫨 with id " + req.params.id
            });            
        }
        res.send(user);
    }).catch(err => {         
        return res.status(500).send({
            message: `Error retrieving user 🫨 : ${err.message}`
        });
    });
    
});

//Update a user
router.put('/:id', async (req,res) => {
    const pswd = req.body.password;
    const saltrounds = 10;
    const salt = await bcrypt.genSalt(saltrounds);
    const hash = await bcrypt.hash(pswd, salt);

    User.findOneAndUpdate({_id:req.params.id}, {
        password: hash
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found 🫨"
            });
        }
        res.send(user);
    }).catch(err => {        
        return res.status(500).send({
            message: `Error updating user 🫨: ${err.message} `
        });
    });
});

//Delete a user
router.delete('/:id',function (req,res){
    User.findOneAndDelete({_id:req.params.id})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found 🫨"
            });
        }
        res.send({message: "User deleted successfully! 😍"});
    }).catch(err => {         
        return res.status(500).send({
            message: "Could not delete user with id 🫨" + req.params.userid
        });
    });
});

module.exports = router;