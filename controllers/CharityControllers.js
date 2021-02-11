const db = require("../models");
const bcrypt = require('bcryptjs');
const passport = require('passport')



module.exports = {

    findAll: function(req, res) {
        db.Charity
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Charity
        .find({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
    findBySearch: function(req, res){
        db.Charity
        .find({$text: {$search: req.params.query, $caseSensitive: false}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findRandom: function(req, res){
        db.Charity
        .aggregate([{ $sample: { size: 1 } }])
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // for creating a new charity, updating it, and removing it... Maybe...
    create: function(req, res){
        console.log(req.body)
        db.Charity
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Charity
        .findByIdAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Charity
        .findByIdAndRemove({ _id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    createNew: function(req, res){
        
            const { username, password} = req.body;
            let errors = [];
        
            //Check required fields
            if (!username || !password ) {
                errors.push({ msg: 'Please fill in all fields' });
            }
        
                //Validation passed
                db.Charity.find0ne({ username: username })
                    .then(user => {
                        if (user) {
                            // User exists
                            errors.push({ msg: 'username is already registered' })
                            res.render('register', {
                                errors,
                                username,
                                password
                            });
                        } else {
                            const newUser = new db.Charity({
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


}