const { request, response } = require('express');
const { countries } = require('../../database/models');

const getCountry = async (req = request, res = response) => {
  try {
    const { id } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener los estadios',
      data: []
    };

    let country = [];

    if ( id ) {
      country = [await countries.findOne({where: {id}})];
    } else {
      country = await countries.findAll();
    }

    if (country) {
      response = {
        status: 200,
        msj: 'Información de paises',
        data: country
      };
    }

    return res.status(response.status).json(response);
  } catch(error) {
    console.error(error);
    return response = res.status(500).json({
      status: 500,
      msj: 'Error al obtener los paises',
      data: [],
      error
    });
  }
}

module.exports = {
  getCountry
}