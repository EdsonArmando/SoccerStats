module.exports = (sequelize, DataTypes) => {

  const soccer_games = sequelize.define('soccer_games', {
    game_date: DataTypes.DATE,
    attendees: DataTypes.INTEGER,
    result_local: DataTypes.INTEGER,
    result_visiting: DataTypes.INTEGER,
    state: DataTypes.STRING,
    idStadium: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stadiums',
        key: 'id',
        as: 'idStadium',
      }
    },
    idTeamLocal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'idTeamLocal',
      }
    },
    idTeamVisiting: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'idTeamVisiting',
      }
    },
    idCompetition: {
      type: DataTypes.INTEGER,
      references: {
        model: 'competitions',
        key: 'id',
        as: 'idCompetition'
      }
    }
  }, {
    sequelize,
    modelName: 'soccer_games',
  });

  soccer_games.associate = function (models) {
    soccer_games.belongsTo(models.stadiums, {
      foreignKey: 'idStadium',
      onDelete: 'CASCADE'
    });

    soccer_games.belongsTo(models.competitions, {
      foreignKey: 'idCompetition',
      onDelete: 'CASCADE'
    });

    soccer_games.belongsTo(models.teams, {
      foreignKey: 'idTeamLocal',
      onDelete: 'CASCADE'
    });

    soccer_games.belongsTo(models.teams, {
      foreignKey: 'idTeamVisiting',
      onDelete: 'CASCADE'
    });
  };

  return soccer_games;
};