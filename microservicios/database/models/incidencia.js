module.exports = (sequelize, DataTypes) => {

  const incidencias = sequelize.define('incidencias', {
    id_game:  {
      type: DataTypes.INTEGER,
      references: {
        model: 'soccer_games',
        key: 'id',
        as: 'id_game',
      }
    },
    id_player: {
      type: DataTypes.INTEGER,
      references: {
        model: 'players',
        key: 'id',
        as: 'id_player',
      }
    },
    id_team: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'id_team',
      }
    },
    descripcion: DataTypes.STRING,
    minuto: DataTypes.INTEGER,
  }, {
    tableName: 'incidencias'
  });

  incidencias.associate = function (models) {
    incidencias.belongsTo(models.teams, {
      foreignKey: 'id_team',
      onDelete: 'CASCADE'
    });

    incidencias.belongsTo(models.players, {
      foreignKey: 'id_player',
      onDelete: 'CASCADE'
    });

    incidencias.belongsTo(models.soccer_games, {
      foreignKey: 'id_game',
      onDelete: 'CASCADE'
    });
  };

  return incidencias;
};