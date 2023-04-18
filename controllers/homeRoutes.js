const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', {
    loggedIn: req.session.loggedIn
   });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/adddonor', withAuth, async (req, res) => {
  
  res.render('adddonor', {loggedIn: req.session.loggedIn});
});

router.get('/scheduler', withAuth, async (req, res) => {
  
  res.render('scheduler', {loggedIn: req.session.loggedIn});
});

router.get('/profile', withAuth, async (req, res) => {
  
  res.render('profile', {loggedIn: req.session.loggedIn});
});

module.exports = router;
