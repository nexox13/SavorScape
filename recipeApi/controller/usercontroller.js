const express = require('express');
const User = require('../model/user.js');
 
var router = express.Router();

//Create a user
router.post('/',function(req,res){
    //Create User Object
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    //Save in DB
    user.save()
    .then(data => {
    res.send("Successfully added user \n" +data.firstName);
    }).catch(err => {
        res.status(500).send({message:`Error creating user ${err.message}`});
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