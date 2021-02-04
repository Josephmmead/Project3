const db = require("../models");

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

    // for creating a new charity, updating it, and removing it... Maybe...
    create: function(req, res){
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
        .findByIdAndRemove({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}