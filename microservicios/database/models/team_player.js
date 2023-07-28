module.exports = (sequelize, DataTypes) => {

  const teams_players = sequelize.define('teams_players', {
    idPlayer: {
      type: DataTypes.INTEGER,
      references: {
        model: 'players',
        key: 'id',
        as: 'idPlayer',
      }
    },
    idTeam: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'idTeam',
      }
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    tableName: 'teams_players'
  });

  teams_players.associate = function (models) {
    teams_players.belongsTo(models.players, {
      foreignKey: 'idPlayer',
      onDelete: 'CASCADE'
    });

    teams_players.belongsTo(models.teams, {
      foreignKey: 'idTeam',
      onDelete: 'CASCADE'
    });
  };

  return teams_players;
};