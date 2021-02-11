const router = require("express").Router();
const CharityController = require("../../controllers/CharityControllers");
var passport = require("passport")

// signin routing consts


// const { forwardAuthenticated } = require('../client/config/auth');
const Charity = require("../../models")


router.route("/")
    .get(CharityController.findRandom)

router.route("/id/:id")
    .get(CharityController.findById)

router.route("/query/:query")
    .get(CharityController.findBySearch)

router.route("/register")
    .post(CharityController.create)

router.route("/profile/:id")
    .put(CharityController.update)


// signin and signup routes
//Sign Up
// // router.post("/register", (req, res) => {
//     const { username, password} = req.body;
//     let errors = [];

//     //Check required fields
//     if (!username || !password ) {
//         errors.push({ msg: 'Please fill in all fields' });
//     }

//         //Validation passed
//         Chairity.find0ne({ username: username })
//             .then(user => {
//                 if (user) {
//                     // User exists
//                     errors.push({ msg: 'username is already registered' })
//                     res.render('register', {
//                         errors,
//                         username,
//                         password
//                     });
//                 } else {
//                     const newUser = new Charity({
//                         username,
//                         password
//                     });

//                     // Hash Password
//                     bcrypt.genSalt(10, (err, salt) =>
//                         bcrypt.hash(newUser.password, salt, (err, hash) => {
//                             if (err) throw err;
//                             //Set password to hashed
//                             newUser.password = hash;
//                             //Save user
//                             newUser.save()
//                                 .then(user => {
//                                     res.redirect('/');
//                                 })
//                                 .catch(err => console.log(err));
// //                         }))
// //                 }
// //             })
    
// })
// //Login Handle

router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      console.log(user)
      if (!user) { return res.json("incorrect username"); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(user._id)
        return res.json(user._id);
      });
    })(req, res, next);
  });

// //Logout Handle 
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router;



    