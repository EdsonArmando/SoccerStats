'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('incidencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_game: {
        type: Sequelize.INTEGER,
        references: { model: 'soccer_games', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_player:  {
        type: Sequelize.INTEGER,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_team:  {
        type: Sequelize.INTEGER,
        references: { model: 'teams', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      descripcion: {
        type: Sequelize.STRING
      },
      minuto: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('incidencias');
  }
};