'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('soccer_games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_date: {
        type: Sequelize.DATE
      },
      attendees: {
        type: Sequelize.INTEGER
      },
      result_local: {
        type: Sequelize.INTEGER
      },
      result_visiting: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.INTEGER
      },
      idStadium:  {
        type: Sequelize.INTEGER,
        references: { model: 'stadiums', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      idCompetition:  {
        type: Sequelize.INTEGER,
        references: { model: 'competitions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      idTeamLocal:  {
        type: Sequelize.INTEGER,
        references: { model: 'teams', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      idTeamVisiting:  {
        type: Sequelize.INTEGER,
        references: { model: 'teams', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('soccer_games');
  }
};