module.exports = (sequelize, DataTypes) => {

  const team_user = sequelize.define('teams_users', {
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        as: 'idUser',
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
  }, {
    tableName: 'teams_users'
  });

  team_user.associate = function (models) {
    team_user.belongsTo(models.users, {
      foreignKey: 'idUser',
      onDelete: 'CASCADE'
    });

    team_user.belongsTo(models.teams, {
      foreignKey: 'idTeam',
      onDelete: 'CASCADE'
    });
  };

  return team_user;
};