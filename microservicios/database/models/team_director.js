module.exports = (sequelize, DataTypes) => {

  const teams_directors = sequelize.define('teams_directors', {
    idDirector: {
      type: DataTypes.INTEGER,
      references: {
        model: 'directors',
        key: 'id',
        as: 'idDirector',
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
    tableName: 'teams_directors'
  });

  teams_directors.associate = function (models) {
    teams_directors.belongsTo(models.directors, {
      foreignKey: 'idDirector',
      onDelete: 'CASCADE'
    });

    teams_directors.belongsTo(models.teams, {
      foreignKey: 'idTeam',
      onDelete: 'CASCADE'
    });
  };

  return teams_directors;
};