var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcryptjs');

// Load Charity model
const Charity = require('../models/Charity')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log("in strategy")
      // console.log(username)
      // Match user
      Charity.findOne({
        username: username
      }).then(user => {
        console.log(user)
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        // bcrypt.compare(password, user.password, (err, isMatch) => {
        //   if (err) throw err;
        //   if (isMatch) {
        //     return done(null, user);
        //   } else {
        //     return done(null, false, { message: 'Password incorrect' });
        //   }
        // });
        if(user.password !== password) {
          return done(null, false, { message: 'password incorrect'});
        }
        else {
          return done(null, user)
        }
      });
    })
  );

};
