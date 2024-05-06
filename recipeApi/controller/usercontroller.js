const express = require('express');
const User = require('../model/user.js');
const keycloak = require('../config/keycloak.js').getKeycloak();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { hashPassword } = require('../login/hashPass.js');
 
var router = express.Router();

//Create a user
router.post('/', function(req,res){
    hashPassword(10, req.body.password)
    .then((hash) => {
        const user = new User({
            username: req.body.username,
            password: hash
        });
        user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: `Error cr eating user ${err.message}`});
        });
    })
    .catch(err => {
        console.error('Error hashing password:', err);
        res.status(500).send({message: `Error hashing password: ${err.message}`});
    });
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
        firstName: req.body.firstName,
        lastName: req.body.lastName
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