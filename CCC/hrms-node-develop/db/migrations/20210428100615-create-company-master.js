'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(512),
        allowNull:false
      },
      website: {
        type: Sequelize.STRING(1032),
        allowNull:false
      },
      noOfEmployees: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      contactNumber: {
        type: Sequelize.STRING(16),
        allowNull:false
      },
      contactEmail: {
        type: Sequelize.STRING(512),
        allowNull:false
      },
      streetLine1: {
        type: Sequelize.STRING(512),
        allowNull:false
      },
      streetLine2: {
        type: Sequelize.STRING(512)
      },
      area: {
        type: Sequelize.STRING(64),
        allowNull:false
      },
      city: {
        type: Sequelize.STRING(512),
        allowNull:false
      },
      postalCode: {
        type: Sequelize.STRING(8),
        allowNull:false
      },
      state: {
        type: Sequelize.STRING(512),
        allowNull:false
      },
      country: {
        type: Sequelize.STRING(512),
        allowNull:false
      },
      appraisalCycle: {
        type: Sequelize.STRING(512)
      },
      noticePeriod: {
        type: Sequelize.INTEGER
      },
      bondDurationForExperienced: {
        type: Sequelize.INTEGER
      },
      bondDurationForFreshers: {
        type: Sequelize.INTEGER
      },
      weekends: {
        type: Sequelize.STRING(512)
      },
      notes: {
        type: Sequelize.STRING(1032)
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedDate:{
        type:Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CompanyMasters');
  }
};