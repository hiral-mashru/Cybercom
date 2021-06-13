'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CompanyMaster.init({
    name:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:'Please enter the company Name'}
      }
    },
    website:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:'Please enter the company website name'}
      }
    },
    noOfEmployees:{
      type:DataTypes.INTEGER,
      validate:{
        isNumeric:{msg:'Enter only in numeric Format'},
        notEmpty:{msg:'Please enter the number of employee'}
      }
    },
    contactNumber:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:'Please enter the contact number'}
      }
    },
    contactEmail:{
      type:DataTypes.STRING,
      validate:{
        isEmail:{msg:'Please enter valid email'},
        notEmpty:{msg:'Please enter the contact Email'}
      }
    },
    streetLine1:{
      type:DataTypes.STRING,
      notEmpty:{msg:'Please enter streetLine1'}
    },
    streetLine2: DataTypes.STRING,
    area:{
      type: DataTypes.STRING,
      notEmpty:{msg:'Please fill the area'}
    },
    city:{
      type:DataTypes.STRING,
      notEmpty:{msg:'Please fill the city name'}
    },
    postalCode:{
      type:DataTypes.STRING,
      notEmpty:{msg:'Please enter the postalCode'}
    },
    state:{
      type:DataTypes.STRING,
      notEmpty:{msg:'Please fill the state'}
    },
    country:{
      type:DataTypes.STRING,
      notEmpty:{msg:'Please fill the country'}
    },
    appraisalCycle: DataTypes.STRING,
    noticePeriod: DataTypes.INTEGER,
    bondDurationForExperienced: DataTypes.INTEGER,
    bondDurationForFreshers: DataTypes.INTEGER,
    weekends: DataTypes.STRING,
    notes: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CompanyMaster',
    timestamps: true,
    createdAt:'createdDate',
    updatedAt:'updatedDate',
    paranoid:true,
    deletedAt:'deletedDate'
  });
  return CompanyMaster;
};