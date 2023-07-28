module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams_directors', [
      { id: 1, idTeam: 1, idDirector:1, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      { id: 2, idTeam: 2, idDirector:2, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      { id: 3, idTeam: 3, idDirector:3, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      { id: 4, idTeam: 4, idDirector:4, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      { id: 5, idTeam: 5, idDirector:5, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      { id: 6, idTeam: 6, idDirector:6, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams_directors', null, {});
  }
};

