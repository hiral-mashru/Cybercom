'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DesignationMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DesignationMaster.init({
    title: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        notEmpty:{msg:'Please enter the Title'}
      }
    },
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DesignationMaster',
    timestamps:true,
    paranoid:true,
    updatedAt:'updatedDate',
    createdAt:'createdDate',
    deletedAt:'deletedDate'
  });
  return DesignationMaster;
};