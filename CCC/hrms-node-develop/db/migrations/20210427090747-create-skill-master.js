'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('SkillMasters', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING
			},
			isActive: {
				defaultValue: true,
				type: Sequelize.BOOLEAN
			},
			deletedDate: {
				type: Sequelize.DATE,
				defaultValue: null
			},
			createdDate: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedDate: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('SkillMasters');
	}
};
