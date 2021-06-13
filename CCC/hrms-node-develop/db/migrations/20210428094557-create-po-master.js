'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('POMasters', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			area: {
				type: Sequelize.STRING(512)
			},
			state: {
				type: Sequelize.STRING(512)
			},
			city: {
				type: Sequelize.STRING(512)
			},
			country: {
				type: Sequelize.STRING(512)
			},
			postalCode: {
				type: Sequelize.STRING(512)
			},
			isActive: {
				type: Sequelize.BOOLEAN
			},
			createdDate: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedDate: {
				allowNull: true,
				type: Sequelize.DATE
			},
			updatedDate: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('POMasters');
	}
};
