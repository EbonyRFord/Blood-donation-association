const sequelize = require('../config/connection');
const { User, Donor } = require('../models');
const userData = require('./userData.json');
const donorData = require('./donorData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Donor.bulkCreate(donorData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
