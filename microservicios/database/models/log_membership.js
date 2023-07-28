module.exports = (sequelize, DataTypes) => {

  const log_memberships = sequelize.define('log_memberships', {
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        as: 'idUser',
      }
    },
  }, {
    tableName: 'log_memberships'
  });

  log_memberships.associate = function (models) {
    log_memberships.belongsTo(models.users, {
      foreignKey: 'idUser',
      onDelete: 'CASCADE'
    });
  };

  return log_memberships;
};