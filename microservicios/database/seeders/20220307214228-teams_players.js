module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams_players', [
      {idTeam: 1, idPlayer:1, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 1, idPlayer:2, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 1, idPlayer:3, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 1, idPlayer:4, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 1, idPlayer:5, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 2, idPlayer:6, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},

      {idTeam: 2, idPlayer:7, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 2, idPlayer:8, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 2, idPlayer:9, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 2, idPlayer:10, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 3, idPlayer:11, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},

      {idTeam: 3, idPlayer:12, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 3, idPlayer:13, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 3, idPlayer:14, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 3, idPlayer:15, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 4, idPlayer:16, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},

      {idTeam: 4, idPlayer:17, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 4, idPlayer:18, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 4, idPlayer:19, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 4, idPlayer:20, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 5, idPlayer:21, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},

      {idTeam: 5, idPlayer:22, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 5, idPlayer:23, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 5, idPlayer:24, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 5, idPlayer:25, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 6, idPlayer:26, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},

      {idTeam: 6, idPlayer:27, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 6, idPlayer:28, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 6, idPlayer:29, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},
      {idTeam: 6, idPlayer:30, start_date: '1998-11-14 02:00:00', end_date: '1998-11-14 04:00:00', createdAt: new Date(), updatedAt:new Date()},

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams_players', null, {});
  }
};

