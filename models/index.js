const User = require('./user');
const Donor = require('./donor')

User.hasOne(Donor, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Donor.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Donor, User };