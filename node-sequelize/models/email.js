'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Email.belongsTo(models.Human) //reverse case => Email belongs to Human
    }
  };
  Email.init({
    emailAddress: DataTypes.STRING,
    humanId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Email',
    timestamps: false
  });
  return Email;
};