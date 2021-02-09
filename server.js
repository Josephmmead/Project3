const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose")
const passport = require('passport')
const flash = require('connect-flash');
const session = require('express-session');
var bodyParser = require("body-parser");

const app = express();

//Passport config
require('./config/passport')(passport);

//DB Config
const db = require('./config/keys').mongoURI;
const { Charity } = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Charity.findById(id, function(err, user) {
    done(err, user);
  });
});


// Connect Flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use('/', routes);
app.use('/', require('./routes/index'))


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Charity',
   { useNewUrlParser: true , useUnifiedTopology: true});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
