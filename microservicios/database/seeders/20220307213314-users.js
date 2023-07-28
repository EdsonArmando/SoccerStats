module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [ // password = 1234
      { id: 1, first_name:'user 1', last_name:'user', birth_date: "1998-11-14", password: "U2FsdGVkX1+1+tC2yixjcqkHPHrrHWFbOX17YojgqK4=", email:"alisonleiva24@gmail.com", phone: 42305135, photo: "", rol: 1, gender: 'F', location: "zone 1", isMember:0, idCountry:1, createdAt: new Date(), updatedAt:new Date()},
      { id: 2, first_name:'user 2', last_name:'user', birth_date: "1998-11-14", password: "U2FsdGVkX1+1+tC2yixjcqkHPHrrHWFbOX17YojgqK4=", email:"alisonleiva25@gmail.com", phone: 42305135, photo: "", rol: 2, gender: 'F', location: "zone 1", isMember:0, idCountry:30, createdAt: new Date(), updatedAt:new Date()},
      { id: 3, first_name:'user 3', last_name:'user', birth_date: "1998-11-14", password: "U2FsdGVkX1+1+tC2yixjcqkHPHrrHWFbOX17YojgqK4=", email:"alisonleiva26@gmail.com", phone: 42305135, photo: "", rol: 3, gender: 'F', location: "zone 1", isMember:0, idCountry:55, createdAt: new Date(), updatedAt:new Date()},
      { id: 4, first_name:'user 4', last_name:'user', birth_date: "1998-11-14", password: "U2FsdGVkX1+1+tC2yixjcqkHPHrrHWFbOX17YojgqK4=", email:"alisonleiva27@gmail.com", phone: 42305135, photo: "", rol: 1, gender: 'F', location: "zone 1", isMember:0, idCountry:62, createdAt: new Date(), updatedAt:new Date()},
      { id: 5, first_name:'user 5', last_name:'user', birth_date: "1998-11-14", password: "U2FsdGVkX1+1+tC2yixjcqkHPHrrHWFbOX17YojgqK4=", email:"alisonleiva28@gmail.com", phone: 42305135, photo: "", rol: 2, gender: 'F', location: "zone 1", isMember:0, idCountry:73, createdAt: new Date(), updatedAt:new Date()},
      { id: 6, first_name:'user 6', last_name:'user', birth_date: "1998-11-14", password: "U2FsdGVkX1+1+tC2yixjcqkHPHrrHWFbOX17YojgqK4=", email:"alisonleiva29@gmail.com", phone: 42305135, photo: "", rol: 3, gender: 'F', location: "zone 1", isMember:0, idCountry:113, createdAt: new Date(), updatedAt:new Date()},
    ]);
  },
  down: (queryInterface, Sequelize) => {rol
    return queryInterface.bulkDelete('users', null, {});
  }
};