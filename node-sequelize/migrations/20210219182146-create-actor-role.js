'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ActorRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleId: {
        type: Sequelize.INTEGER,
        regerences: {
          model: {
            tableName: "Roles"
          },
          key: "id"
        },
        allowNull: false
      },
      actorId: {
        type: Sequelize.INTEGER,
        regerences: {
          model: {
            tableName: "Actors"
          },
          key: "id"
        },
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ActorRoles');
  }
};