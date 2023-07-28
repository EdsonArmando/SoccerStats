module.exports = (sequelize, DataTypes) => {

  const quinielas = sequelize.define('quinielas', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    scoreTeam1: DataTypes.INTEGER,
    scoreTeam2: DataTypes.INTEGER,
    idTeam1: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'idTeam1',
      }
    },
    idTeam2: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'idTeam2',
      }
    },
  }, {
    tableName: 'quinielas'
  });

  quinielas.associate = function (models) {
    quinielas.hasMany(models.quiniela_users, {
      foreignKey: 'idQuiniela'
    });

    quinielas.belongsTo(models.teams, {
      foreignKey: 'idTeam1',
      onDelete: 'CASCADE'
    })

    quinielas.belongsTo(models.teams, {
      foreignKey: 'idTeam2',
      onDelete: 'CASCADE'
    })
  };

  return quinielas;
};