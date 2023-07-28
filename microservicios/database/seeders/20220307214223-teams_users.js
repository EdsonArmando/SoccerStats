module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams_users', [
      { id: 1, idTeam: 1, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 2, idTeam: 2, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 3, idTeam: 3, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 4, idTeam: 4, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 5, idTeam: 5, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 6, idTeam: 6, idUser:1, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams_users', null, {});
  }
};

