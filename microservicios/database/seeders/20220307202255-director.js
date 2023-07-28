module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('directors', [
      { id: 1,name:'director 1', lastname:'director', birthdate: "1998-11-14", idCountry:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 2,name:'director 2', lastname:'director', birthdate: "1998-11-14", idCountry:30, createdAt: new Date(), updatedAt:new Date()},
      { id: 3,name:'director 3', lastname:'director', birthdate: "1998-11-14", idCountry:55, createdAt: new Date(), updatedAt:new Date()},
      { id: 4,name:'director 4', lastname:'director', birthdate: "1998-11-14", idCountry:62, createdAt: new Date(), updatedAt:new Date()},
      { id: 5,name:'director 5', lastname:'director', birthdate: "1998-11-14", idCountry:73, createdAt: new Date(), updatedAt:new Date()},
      { id: 6,name:'director 6', lastname:'director', birthdate: "1998-11-14", idCountry:113, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('directors', null, {});
  }
};
