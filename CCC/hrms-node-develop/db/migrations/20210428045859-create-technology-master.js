'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('TechnologyMasters', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			parentId: {
				allowNull: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			isActive: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			deletedDate: {
				allowNull: true,
				defaultValue: null,
				type: Sequelize.DATE,
			},
			createdDate: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedDate: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('TechnologyMasters');
	},
};
