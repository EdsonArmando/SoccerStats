module.exports = (sequelize, DataTypes) => {

  const teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    foundation_date: DataTypes.DATE,
    idCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
        as: 'idCountry',
      }
    },
    photo: DataTypes.STRING,
  }, {
    tableName: 'teams'
  });

  teams.associate = function (models) {
    teams.belongsTo(models.countries, {
      foreignKey: 'idCountry',
      onDelete: 'CASCADE'
    })

    teams.hasMany(models.soccer_games, {
      foreignKey: 'idTeamLocal'
    });

    teams.hasMany(models.soccer_games, {
      foreignKey: 'idTeamVisiting'
    });

    teams.hasMany(models.quinielas, {
      foreignKey: 'idTeam1'
    });

    teams.hasMany(models.quinielas, {
      foreignKey: 'idTeam2'
    });

    teams.hasMany(models.teams_players, {
      foreignKey: 'idTeam'
    });
    
    teams.hasMany(models.bitacoras, {
      foreignKey: 'id_team_origin'
    });

    teams.hasMany(models.bitacoras, {
      foreignKey: 'id_team_destination'
    });

    teams.hasMany(models.teams_directors, {
      foreignKey: 'idTeam'
    });

    teams.hasMany(models.incidencias, {
      foreignKey: 'id_team'
    });
  };

  return teams;
};