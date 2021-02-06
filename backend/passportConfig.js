const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');

// Load User Model
const User = require('../models/Users');
const passport = require("passport");

module.exports = function(passport) {
  passport.use(
    new localStrategy({ usernameField: 'email'}, (email,password, done) => {
      //Match User
      User.findOne({ email: email })
      .then(user => {
        if(!user){
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password 
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err;

          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect'});
          }
        });
      })
      .catch(err => console.log(err))
    })
  )
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
})










// module.exports = function (passport) {
//   passport.use(
//     new localStrategy((username, password, done) => {
//       User.findOne({ username: username }, (err, user) => {
//         if (err) throw err;
//         if (!user) return done(null, false);
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (err) throw err;
//           if (result === true) {
//             return done(null, user);
//           } else {
//             return done(null, false);
//           }
//         });
//       });
//     })
//   );



  

//   passport.serializeUser((user, cb) => {
//     cb(null, user.id);
//   });
//   passport.deserializeUser((id, cb) => {
//     User.findOne({ _id: id }, (err, user) => {
//       const userInformation = {
//         username: user.username,
//       };
//       cb(err, userInformation);
//     });
//   });
// };
