const router = require('express').Router();
const userRoutes = require('./userRoutes');
const donorRoutes = require('./donorRoutes')

router.use('/users', userRoutes);
router.use('/donors', donorRoutes)

module.exports = router;
