module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quinielas', [
      { id:1, name: "Quiniela 1", status: 0, date: '1998-11-14 02:00:00',scoreTeam1:1, scoreTeam2:10, idTeam1:6, idTeam2:1, createdAt: new Date(), updatedAt:new Date()},
      { id:2, name: "Quiniela 2", status: 0, date: '1998-11-14 02:00:00',scoreTeam1:1, scoreTeam2:10, idTeam1:5, idTeam2:2, createdAt: new Date(), updatedAt:new Date()},
      { id:3, name: "Quiniela 3", status: 0, date: '1998-11-14 02:00:00',scoreTeam1:1, scoreTeam2:10, idTeam1:4, idTeam2:3, createdAt: new Date(), updatedAt:new Date()},
      { id:4, name: "Quiniela 4", status: 0, date: '1998-11-14 02:00:00',scoreTeam1:1, scoreTeam2:10, idTeam1:3, idTeam2:4, createdAt: new Date(), updatedAt:new Date()},
      { id:5, name: "Quiniela 5", status: 0, date: '1998-11-14 02:00:00',scoreTeam1:1, scoreTeam2:10, idTeam1:2, idTeam2:5, createdAt: new Date(), updatedAt:new Date()},
      { id:6, name: "Quiniela 6", status: 0, date: '1998-11-14 02:00:00',scoreTeam1:1, scoreTeam2:10, idTeam1:1, idTeam2:6, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quinielas', null, {});
  }
};
