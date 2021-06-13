'use strict';
const { Model } = require('sequelize');
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
	}
	DepartmentMaster.init(
		{
			title:{
				type:DataTypes.STRING,
				validate:{
					notEmpty:{msg:'Please enter the Title'}
				}
			},
			isActive: DataTypes.BOOLEAN
		},
		{
			sequelize,
			modelName: 'DepartmentMaster',
			paranoid: true,
			timestamps: true,
			updatedAt: 'updatedDate',
			createdAt: 'createdDate',
			deletedAt: 'deletedDate'
		}
	);
	return DepartmentMaster;
};
