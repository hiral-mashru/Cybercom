'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TechnologyMaster extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {}
	}
	TechnologyMaster.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { args: true, msg: 'Title cannot be empty' },
					notEmpty: { args: true, msg: 'Title cannot be empty' },
					isAlpha: { args: true, msg: 'Should not contain any numbers' },
				},
			},
			parentId: {
				type: DataTypes.INTEGER,
			},
			isActive: { type: DataTypes.BOOLEAN },
			deletedDate: { type: DataTypes.DATE },
		},
		{
			sequelize,
			modelName: 'TechnologyMaster',
			updatedAt: 'updatedDate',
			createdAt: 'createdDate',
			deletedAt: 'deletedDate',
			paranoid: true,
		}
	);
	return TechnologyMaster;
};
