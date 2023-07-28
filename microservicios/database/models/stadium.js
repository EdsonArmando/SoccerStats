module.exports = (sequelize, DataTypes) => {

  const stadiums = sequelize.define('stadiums', {
    name: DataTypes.STRING,
    fundation_date: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    idCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'countries',
        key: 'id',
        as: 'idCountry',
      }
    },
    address: DataTypes.STRING,
    state: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    tableName: 'stadiums'
  });

  stadiums.associate = function (models) {
    stadiums.belongsTo(models.countries, {
      foreignKey: 'idCountry',
      onDelete: 'CASCADE'
    });

    stadiums.hasMany(models.soccer_games, {
      foreignKey: 'idStadium'
    });
  };

  return stadiums;
};