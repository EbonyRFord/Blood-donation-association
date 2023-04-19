const router = require('express').Router();
const { Donor } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const donorData = await Donor.create(req.body); 
    res.status(200).json(donorData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
