module.exports = (sequelize, DataTypes) => {

  const notice = sequelize.define('notices', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    photo: DataTypes.STRING,
    idTeam: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'idTeam',
      }
    },
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        as: 'idUser',
      }
    },
  }, {
    tableName: 'notices'
  });

  notice.associate = function (models) {
    notice.belongsTo(models.users, {
      foreignKey: 'idUser',
      onDelete: 'CASCADE'
    });

    notice.belongsTo(models.teams, {
      foreignKey: 'idTeam',
      onDelete: 'CASCADE'
    });
  };

  return notice;
};