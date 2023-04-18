const router = require('express').Router();
const { Donor } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const donorData = await Donor.create(req.body); 
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
