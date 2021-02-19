'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActorRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ActorRole.init({
    roleId: DataTypes.INTEGER,
    actorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActorRole',
    timestamps: false
  });
  return ActorRole;
};