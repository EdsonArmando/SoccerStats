'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iso: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      nicename: {
        type: Sequelize.STRING
      },
      iso3: {
        type: Sequelize.STRING
      },
      numcode: {
        type: Sequelize.INTEGER
      },
      phonecode: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('countries');
  }
};