'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Human extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Human.hasOne(models.Email)
    }
  };
  Human.init({
    name: DataTypes.STRING,
    phoneNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Human',
    timestamps: false
  });
  return Human;
};