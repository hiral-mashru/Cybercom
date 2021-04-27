'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BloodGroupMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BloodGroupMaster.init({
    title: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BloodGroupMaster',
    timestamps: true,
    paranoid: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    deletedAt: 'deletedDate'
  });
  return BloodGroupMaster;
};