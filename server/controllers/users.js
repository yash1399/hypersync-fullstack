const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt= require('jsonwebtoken');
const passport= require('passport');
const config = require('../config/config');

router.get('/', (req,res) => {
    User.find({}).then(users => {
        const usersInfo = {};
        users.forEach(user => {
          usersInfo[user._id] = {
            id: user._id,
            username: user.username,
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            groups: user.groups,
            tasks: user.tasks,
            chats: user.chats
          };
        });
        return res.json(usersInfo);
      });

});

router.post('/register', (req,res) => {
    const newUser = new User ({
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) console.log(err);
            newUser.password = hash;
            newUser
                .save()
                .then(user => {
                    const payload = {
                        id : user.id,
                        username: user.username,
                        fname: req.body.fname,
                        lname: req.body.lname,
                        email: req.body.email
                    };

                    jwt.sign(
                        payload,
                        config.secret,
                        { expiresIn: 3600},
                        (err, token) =>{
                            res.json({
                                success: true,
                                token: "Bearer "+ token
                            });
                        }
                    );
                })
                .catch(err => console.log(err));
        });
    });
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }
      bcrypt.compare (password, user.password)
        const  payload = {
            username: user.username,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email
        };
        jwt.sign()

      
})