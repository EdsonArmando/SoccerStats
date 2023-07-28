module.exports = (sequelize, DataTypes) => {

  const users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    location: DataTypes.STRING,
    rol: DataTypes.STRING,
    status: DataTypes.INTEGER,
    isMember: DataTypes.BOOLEAN,
    idCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
        as: 'idCountry',
      }
    },
  }, {
    tableName: 'users'
  });

  users.associate = function (models) {
    users.belongsTo(models.countries, {
      foreignKey: 'idCountry',
      onDelete: 'CASCADE'
    })

    users.hasMany(models.log_memberships, {
      foreignKey: 'idUser'
    });

    users.hasMany(models.quiniela_users, {
      foreignKey: 'idUser'
    });

    users.hasMany(models.teams_users, {
      foreignKey: 'idUser'
    });

    users.hasMany(models.notices, {
      foreignKey: 'idUser'
    });

    users.hasMany(models.authentications, {
      foreignKey: 'idUser'
    });
  };

  return users;
};