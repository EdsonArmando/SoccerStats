module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notices', [
      { id: 1, title: "Noticia 1", description: "descripcion de noticia 1", date: '1998-11-14 02:00:00', photo: '', idTeam:1, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 2, title: "Noticia 2", description: "descripcion de noticia 2", date: '1998-11-14 02:00:00', photo: '', idTeam:2, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 3, title: "Noticia 3", description: "descripcion de noticia 3", date: '1998-11-14 02:00:00', photo: '', idTeam:3, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 4, title: "Noticia 4", description: "descripcion de noticia 4", date: '1998-11-14 02:00:00', photo: '', idTeam:4, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 5, title: "Noticia 5", description: "descripcion de noticia 5", date: '1998-11-14 02:00:00', photo: '', idTeam:5, idUser:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 6, title: "Noticia 6", description: "descripcion de noticia 6", date: '1998-11-14 02:00:00', photo: '', idTeam:6, idUser:1, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notices', null, {});
  }
};