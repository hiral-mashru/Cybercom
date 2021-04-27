'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepartmentMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DepartmentMaster.init({
    title: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'DepartmentMaster',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    deletedAt: 'deletedDate'
  });
  return DepartmentMaster;
};