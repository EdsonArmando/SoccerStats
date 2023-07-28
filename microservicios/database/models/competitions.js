module.exports = (sequelize, DataTypes) => {

  const competitions = sequelize.define('competitions', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    championTeam: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'championTeam',
      }
    },
    idCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
        as: 'idCountry',
      }
    },
  }, {
    tableName: 'competitions'
  });

  competitions.associate = function (models) {
    competitions.belongsTo(models.countries, {
      foreignKey: 'idCountry',
      onDelete: 'CASCADE'
    });
    competitions.belongsTo(models.teams, {
      foreignKey: 'championTeam',
      onDelete: 'CASCADE'
    });
    competitions.hasMany(models.soccer_games, {
      foreignKey: 'idCompetition'
    });
  };

  return competitions;
};