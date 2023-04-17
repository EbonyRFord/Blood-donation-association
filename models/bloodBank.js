const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Bloodbank extends Model {}


Bloodbank.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      bloodbank_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'patient',
          key: 'id',
        },
      },  
      donor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'donor',
          key: 'id',
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'bloodbank',
    }
  );
  

  module.exports = Bloodbank;