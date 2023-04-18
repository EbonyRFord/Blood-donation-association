const sequelize = require('../config/connection');
const { User } = require('../models');
const { Donor } = require('../models')

const userData = require('./userData.json');
const donorDate = require('./donorData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedDonor = async () => {
  await sequelize.sync({ force: true });

  await Donor.bulkCreate(donorData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDonor();
seedDatabase();
