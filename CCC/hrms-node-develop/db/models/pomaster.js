'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class POMaster extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	POMaster.init(
		{
			area: DataTypes.STRING,
			state: DataTypes.STRING,
			city: DataTypes.STRING,
			country: DataTypes.STRING,
			postalCode: DataTypes.STRING,
			isActive: DataTypes.BOOLEAN,
			deletedDate: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'POMaster',
			createdAt: 'createdDate',
			deletedAt: 'deletedDate',
			updatedAt: 'updatedDate',
			paranoid: true,
		}
	);
	return POMaster;
};
