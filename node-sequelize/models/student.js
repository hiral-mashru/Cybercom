'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name field should be filled"
        },
        //len: [5,20] 
        len: {
          args: [5,20],
          msg: "length of value should from 5 to 20 characters"
        }
      }
    },
    roll_no: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: "Roll no should have minimum value of 1"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email value is not valid"
        } 
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    timestamps: false
  });
  return Student;
};