module.exports = (sequelize, DataTypes) => {

  const authentications = sequelize.define('authentications', {
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
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
    sequelize,
    modelName: 'authentications',
  });

  authentications.associate = function (models) {
    authentications.belongsTo(models.users, {
      foreignKey: 'idUser',
      onDelete: 'CASCADE'
    })
  };

  return authentications;
};