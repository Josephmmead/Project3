const express = require('express')
const path = require("path");
const router = express.Router();
const apiRoutes = require("./api");
// const { ensureAuthenticated } = require('../backend/auth');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Welcome Page
// router.get('/', (req, res) => res.render('welcome'));
// Dashboard 
// router.get('/dashboard', ensureAuthenticated, (req, res) => 
//   res.render('dashboard', {
//     name: req.user.name
//   }))

module.exports = router;
