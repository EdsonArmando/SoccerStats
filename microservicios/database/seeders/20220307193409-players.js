module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('players', [
      { id: 1, name:'player 1', lastname:'player', birthdate: "1998-11-14", idCountry:1, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 2, name:'player 2', lastname:'player', birthdate: "1998-11-14", idCountry:1, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 3, name:'player 3', lastname:'player', birthdate: "1998-11-14", idCountry:1, position: 'defensa', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 4, name:'player 4', lastname:'player', birthdate: "1998-11-14", idCountry:1, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 5, name:'player 5', lastname:'player', birthdate: "1998-11-14", idCountry:1, position: 'puntero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 6, name:'player 6', lastname:'player', birthdate: "1998-11-14", idCountry:30, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 7, name:'player 7', lastname:'player', birthdate: "1998-11-14", idCountry:30, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 8, name:'player 8', lastname:'player', birthdate: "1998-11-14", idCountry:30, position: 'defensa', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 9, name:'player 9', lastname:'player', birthdate: "1998-11-14", idCountry:30, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 10, name:'player 10', lastname:'player', birthdate: "1998-11-14", idCountry:30, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 11, name:'player 11', lastname:'player', birthdate: "1998-11-14", idCountry:55, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 12, name:'player 12', lastname:'player', birthdate: "1998-11-14", idCountry:55, position: 'defensa', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 13, name:'player 13', lastname:'player', birthdate: "1998-11-14", idCountry:55, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 14, name:'player 14', lastname:'player', birthdate: "1998-11-14", idCountry:55, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 15, name:'player 15', lastname:'player', birthdate: "1998-11-14", idCountry:55, position: 'puntero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 16, name:'player 16', lastname:'player', birthdate: "1998-11-14", idCountry:62, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 17, name:'player 17', lastname:'player', birthdate: "1998-11-14", idCountry:62, position: 'defensa', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 18, name:'player 18', lastname:'player', birthdate: "1998-11-14", idCountry:62, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 19, name:'player 19', lastname:'player', birthdate: "1998-11-14", idCountry:62, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 20, name:'player 20', lastname:'player', birthdate: "1998-11-14", idCountry:62, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 21, name:'player 21', lastname:'player', birthdate: "1998-11-14", idCountry:73, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 22, name:'player 22', lastname:'player', birthdate: "1998-11-14", idCountry:73, position: 'defensa', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 23, name:'player 23', lastname:'player', birthdate: "1998-11-14", idCountry:73, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 24, name:'player 24', lastname:'player', birthdate: "1998-11-14", idCountry:73, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 25, name:'player 25', lastname:'player', birthdate: "1998-11-14", idCountry:73, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 26, name:'player 26', lastname:'player', birthdate: "1998-11-14", idCountry:113, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 27, name:'player 27', lastname:'player', birthdate: "1998-11-14", idCountry:113, position: 'defensa', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 28, name:'player 28', lastname:'player', birthdate: "1998-11-14", idCountry:113, position: 'delantero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 29, name:'player 29', lastname:'player', birthdate: "1998-11-14", idCountry:113, position: 'portero', status: 1, createdAt: new Date(), updatedAt:new Date()},
      { id: 30, name:'player 30', lastname:'player', birthdate: "1998-11-14", idCountry:113, position: 'puntero', status: 1, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('players', null, {});
  }
};
