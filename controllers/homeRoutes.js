const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/adddonor', withAuth, async (req, res) => {
  
  res.render('adddonor');
});


module.exports = router;
