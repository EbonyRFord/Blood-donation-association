const router = require('express').Router();
const { Donor, User } = require('../models');
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


router.get('/scheduler', withAuth, async (req, res) => {
  
  res.render('scheduler', {loggedIn: req.session.loggedIn});
});

router.get('/profile', withAuth, async (req, res) => {
  
  res.render('profile', {loggedIn: req.session.loggedIn});
});

router.get('/donorlist', withAuth, async (req, res) => {
  
  try {
    // Get all projects and JOIN with user data
    const donorData = await Donor.findAll({
      include: [
        {
          model: Donor,
          attributes: ['name','height','weight','gender','bloodtype','age','phone'],
        },
      ],
    });

    // Serialize data so the template can read it
    const donors = donorData.map((donor) => donor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('donorlist', { 
      donors, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }




});


module.exports = router;
