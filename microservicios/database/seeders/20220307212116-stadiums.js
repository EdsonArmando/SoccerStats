module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stadiums', [
      { id: 1, name:'Stadium 1', capacity:500, fundation_date: "1998-11-14", idCountry:1, address: "zone 7", state: 0, photo: "", createdAt: new Date(), updatedAt:new Date()},
      { id: 2, name:'Stadium 2', capacity:500, fundation_date: "1998-11-14", idCountry:30, address: "zone 8", state: 0, photo: "", createdAt: new Date(), updatedAt:new Date()},
      { id: 3, name:'Stadium 3', capacity:500, fundation_date: "1998-11-14", idCountry:55, address: "zone 9", state: 0, photo: "", createdAt: new Date(), updatedAt:new Date()},
      { id: 4, name:'Stadium 4', capacity:500, fundation_date: "1998-11-14", idCountry:62, address: "zone 4", state: 0, photo: "", createdAt: new Date(), updatedAt:new Date()},
      { id: 5, name:'Stadium 5', capacity:500, fundation_date: "1998-11-14", idCountry:73, address: "zone 3", state: 0, photo: "", createdAt: new Date(), updatedAt:new Date()},
      { id: 6, name:'Stadium 6', capacity:500, fundation_date: "1998-11-14", idCountry:113, address: "zone 2", state: 0, photo: "", createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stadiums', null, {});
  }
};

