// const Bloodbank = require('./bloodBank');
const Donor = require('./donor');
const Patient = require('./patient');

// Bloodbank.hasMany(Donor, {
//     foreignKey: 'Bloodbank_id',
//   });
  
  // Patient.belongsTo(Bloodbank, {
  //   foreignKey: 'Bloodbank_id',
  // });
  

module.exports = { Donor, Patient };

