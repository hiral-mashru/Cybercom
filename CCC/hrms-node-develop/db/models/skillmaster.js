'use strict';
const { Model } = require('sequelize');
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
	}
	SkillMaster.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { args: true, msg: 'Title cannot be empty' },
					notEmpty: { args: true, msg: 'Title cannot be empty' },
				},
			},
			isActive: { type: DataTypes.BOOLEAN },
			deletedDate: { type: DataTypes.DATE },
		},
		{
			sequelize,
			modelName: 'SkillMaster',
			updatedAt: 'updatedDate',
			createdAt: 'createdDate',
			deletedAt: 'deletedDate',
			paranoid: true,
		}
	);
	return SkillMaster;
};
