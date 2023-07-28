module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams', [
      [
        {
          "id": 1,
          "name": "Ajax",
          "foundation_date": "1988-11-14 00:00:00",
          "idCountry": 1,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 2,
          "name": "Atletico",
          "foundation_date": "1999-11-14 00:00:00",
          "idCountry": 30,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 3,
          "name": "Bayern",
          "foundation_date": "1998-11-14 00:00:00",
          "idCountry": 55,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 4,
          "name": "Alashkert",
          "foundation_date": "1975-11-14 00:00:00",
          "idCountry": 62,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 5,
          "name": "Atalanta",
          "foundation_date": "1984-11-14 00:00:00",
          "idCountry": 73,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 6,
          "name": "Barcelona",
          "foundation_date": "1978-11-14 00:00:00",
          "idCountry": 113,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 7,
          "name": "Besiktas",
          "foundation_date": "2011-11-14 00:00:00",
          "idCountry": 12,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 8,
          "name": "Celtic",
          "foundation_date": "2000-11-14 00:00:00",
          "idCountry": 13,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 9,
          "name": "Cluj",
          "foundation_date": "2010-11-14 00:00:00",
          "idCountry": 14,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 10,
          "name": "Chelsea",
          "foundation_date": "2005-11-14 00:00:00",
          "idCountry": 15,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 11,
          "name": "Brujas",
          "foundation_date": "1992-11-14 00:00:00",
          "idCountry": 16,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        },
        {
          "id": 12,
          "name": "Flora",
          "foundation_date": "1984-11-14 00:00:00",
          "idCountry": 17,
          "photo": " ",
          "createdAt": "2022-04-16 07:03:23",
          "updatedAt": "2022-04-16 07:03:23"
        }
      ]
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
