'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bitacoras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_player:  {
        type: Sequelize.INTEGER,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_team_origin:  {
        type: Sequelize.INTEGER,
        references: { model: 'teams', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      team_origin: {
        type: Sequelize.STRING
      },
      id_team_destination:  {
        type: Sequelize.INTEGER,
        references: { model: 'teams', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      team_destination: {
        type: Sequelize.STRING
      },
      transfer_date: {
        type: Sequelize.DATE
      },
      team_origin_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('bitacoras');
  }
};