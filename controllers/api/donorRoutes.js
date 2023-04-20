const router = require('express').Router();
const { Donor } = require('../../models');

router.post('/', async (req, res) => {

  try {
    const donorData = await Donor.create({ ...req.body, user_id: req.session.user_id });

    req.session.save(() => {
      res.status(200).json(donorData);
    });
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/', async (req, res) => {

  try {
    const donorData = await Donor.update({ ...req.body }, { where: { user_id: req.session.user_id } });

    req.session.save(() => {
      res.status(200).json(donorData);
    });
  } catch (err) {
    res.status(400).json(err);
  }

});

module.exports = router;
