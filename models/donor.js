const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Donor extends Model {checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
}}

Donor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blood_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // ONCE SIGNED UP CAN UPDATE AT PROFILE??

      // bloodbank_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'bloodbank',
      //     key: 'id',
      //   },
      // },  
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6],
        },
      },  
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'donor',
    }
  );
  

  module.exports = Donor;