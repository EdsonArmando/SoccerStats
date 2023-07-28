module.exports = (sequelize, DataTypes) => {

  const quiniela_users = sequelize.define('quiniela_users', {
    idQuiniela: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quinielas',
        key: 'id',
        as: 'idQuiniela',
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
    resultTeam1: DataTypes.INTEGER,
    resultTeam2: DataTypes.INTEGER,

  }, {
    tableName: 'quiniela_users'
  });

  quiniela_users.associate = function (models) {
    quiniela_users.belongsTo(models.quinielas, {
      foreignKey: 'idQuiniela',
      onDelete: 'CASCADE'
    })

    quiniela_users.belongsTo(models.users, {
      foreignKey: 'idUser',
      onDelete: 'CASCADE'
    })
  };

  return quiniela_users;
};