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

  res.render('scheduler', { loggedIn: req.session.loggedIn });
});

router.get('/profile', withAuth, async (req, res) => {

  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Donor }],
    });

    const donorData = await Donor.findAll();

    const user = userData.get({ plain: true });

    const donors = donorData.map((donor) => donor.get({ plain: true }));

    const foundDonor = donors.filter(donor => {
      return donor.user_id === req.session.user_id
    });

    const donor = foundDonor[0];

    res.render('profile', {
      user,
      donor,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }

});


router.get('/donorlist', withAuth, async (req, res) => {

  try {
    // Get all projects and JOIN with user data
    const donorData = await Donor.findAll();

    // Serialize data so the template can read it
    const donors = donorData.map((donor) => donor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('donorlist', {
      donors,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;