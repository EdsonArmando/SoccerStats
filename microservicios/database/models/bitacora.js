module.exports = (sequelize, DataTypes) => {

  const bitacoras = sequelize.define('bitacoras', {
    id_player: {
      type: DataTypes.INTEGER,
      references: {
        model: 'players',
        key: 'id',
        as: 'id_player',
      }
    },
    id_team_origin: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'id_team_origin',
      }
    },
    team_origin: DataTypes.STRING,
    id_team_destination: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
        as: 'id_team_destination',
      }
    },
    team_destination: DataTypes.STRING,
    transfer_date: DataTypes.DATE,
    team_origin_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'bitacoras',
  });

  bitacoras.associate = function (models) {
    bitacoras.belongsTo(models.players, {
      foreignKey: 'id_player',
      onDelete: 'CASCADE'
    });
    
    bitacoras.belongsTo(models.teams, {
      foreignKey: 'id_team_origin',
      onDelete: 'CASCADE'
    });

    bitacoras.belongsTo(models.teams, {
      foreignKey: 'id_team_destination',
      onDelete: 'CASCADE'
    });
  };

  return bitacoras;
};