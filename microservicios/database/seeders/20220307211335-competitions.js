module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('competitions', [
      { id: 1, name: 'Competition 1',year:2010, type: ' ', idCountry:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 2, name: 'Competition 2',year:2011, type: ' ', idCountry:30, createdAt: new Date(), updatedAt:new Date()},
      { id: 3, name: 'Competition 3',year:2012, type: ' ', idCountry:55, createdAt: new Date(), updatedAt:new Date()},
      { id: 4, name: 'Competition 4',year:2013, type: ' ', idCountry:62, createdAt: new Date(), updatedAt:new Date()},
      { id: 5, name: 'Competition 5',year:2014, type: ' ', idCountry:73, createdAt: new Date(), updatedAt:new Date()},
      { id: 6, name: 'Competition 6',year:2015, type: ' ', idCountry:113, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('competitions', null, {});
  }
};
