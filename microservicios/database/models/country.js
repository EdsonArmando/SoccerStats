module.exports = (sequelize, DataTypes) => {

  const countries = sequelize.define('countries', {
    iso: DataTypes.STRING,
    name: DataTypes.STRING,
    nicename: DataTypes.STRING,
    iso3: DataTypes.STRING,
    numcode: DataTypes.INTEGER,
    phonecode: DataTypes.INTEGER
  }, {
    tableName: 'countries'
  });

  countries.associate = function (models) {
      countries.hasMany(models.players, {
        foreignKey: 'idCountry'
      });
       countries.hasMany(models.teams, {
        foreignKey: 'idCountry'
      });
      countries.hasMany(models.directors, {
        foreignKey: 'idCountry'
      });
      countries.hasMany(models.competitions, {
          foreignKey: 'idCountry'
      });
  };

  return countries;
};