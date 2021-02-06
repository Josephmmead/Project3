const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport')

const { forwardAuthenticated } = require('../client/config/auth');

router.post('/user/register/', function (req, res) {
    console.log(req.body);
    User.create(req.body)
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(422).json(err))
})

//SignIn Page
// router.get('/SignIn', forwardAuthenticated, (req, res) => res.render('signin'))

// Sign Up PAge
// router.get('/SignUp', forwardAuthenticated, (req, res) => res.render('signup'))

//Sign Up
router.post('/SignUp', (req, res) => {
    const { username, password, password2 } = req.body;
    let errors = [];


    //Check required fields
    if (!username || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    //Check passwords match 
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    //Check password length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' })
    }

    if (errors.length > 0) {
        res.render('signup', {
            errors,
            username,
            password,
            password2
        })
    } else {
        //Validation passed
        User.find0ne({ username: username })
            .then(user => {
                if (user) {
                    // User exists
                    errors.push({ msg: 'username is already registered' })
                    res.render('register', {
                        errors,
                        username,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({
                        username,
                        password
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            //Set password to hashed
                            newUser.password = hash;
                            //Save user
                            newUser.save()
                                .then(user => {
                                    res.redirect('/');
                                })
                                .catch(err => console.log(err));
                        }))
                }
            })
    }
})
//Login Handle

router.post('/signin', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin'
    })(req, res, next);
});

//Logout Handle 
router.get('/logout', (req, res) => {
    req.logout();
})
module.exports = router;