'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SkillMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SkillMaster.init({
    title: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SkillMaster',
    timestamps: true,
    paranoid: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    deletedAt: 'deletedDate'
  });
  return SkillMaster;
};