module.exports = (sequelize, DataTypes) => {

  const directors = sequelize.define('directors', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    idCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
        as: 'idCountry',
      }
    },
    status: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'directors',
  });

  directors.associate = function (models) {
    directors.belongsTo(models.countries, {
      foreignKey: 'idCountry',
      onDelete: 'CASCADE'
    });

    directors.hasMany(models.teams_directors, {
      foreignKey: 'idDirector'
    });
  };

  return directors;
};