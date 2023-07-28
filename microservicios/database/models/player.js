module.exports = (sequelize, DataTypes) => {

  const players = sequelize.define('players', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    idCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
        as: 'idCountry',
      }
    },
    position: DataTypes.STRING,
    status: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    tableName: 'players'
  });

  players.associate = function (models) {
    players.hasMany(models.teams_players, {
      foreignKey: 'idPlayer'
    });

    players.hasMany(models.bitacoras, {
      foreignKey: 'id_player'
    });

    players.hasMany(models.incidencias, {
      foreignKey: 'id_player',
    })

    players.belongsTo(models.countries, {
      foreignKey: 'idCountry',
      onDelete: 'CASCADE'
    })
  };

  return players;
};