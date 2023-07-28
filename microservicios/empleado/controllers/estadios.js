const { request, response } = require('express');
const { stadiums } = require('../../database/models');

const postStadium = async (req = request, res = response) => {
  try {
    const { name, fundation_date, capacity, id_country, address, state, photo } = req.body;
    const createdStadium = await stadiums.create({
      name,
      fundation_date,
      capacity, 
      idCountry: id_country,
      address,
      state,
      photo
    });

    if (!createdStadium) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al crear estadio',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Estadio creado con éxito',
        data: [createdStadium]
      });
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al crear estadio',
      data: [],
      error
    });
  }
}

const getStadium = async (req = request, res = response) => {
  try {
    const { id } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener los estadios',
      data: []
    };

    let stadium = [];

    if ( id ) {
      stadium = [await stadiums.findOne({where: {id}})];
    } else {
      stadium = await stadiums.findAll();
    }

    if (stadium) {
      response = {
        status: 200,
        msj: 'Información de estadios',
        data: stadium
      };
    }

    return res.status(response.status).json(response);
  } catch(error) {
    console.error(error);
    return response = res.status(500).json({
      status: 500,
      msj: 'Error al obtener los estadios',
      data: [],
      error
    });
  }
}

const updateStadium = async (req = request, res = response) => {
  try {
    const { id, name, fundation_date, capacity, id_country, address, state, photo } = req.body;
    const updatedStadium = await stadiums.update(
      {name, fundation_date, capacity, idCountry: id_country, address, state, photo },
      { where: {id}, returning: true, plain: true }
    );

    if (!updatedStadium) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al actualizar estadio',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Estadio actualizado',
        data: [updatedStadium]
      })
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al actualizar estadio',
      data: [],
      error
    });
  }
}

const deleteStadium = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const deletedStadium = await stadiums.destroy({ where: { id } });

    if (!deletedStadium) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al eliminar estadio',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Estadio eliminado',
        data: []
      });
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al eliminar estadio',
      data: [],
      error
    });
  }
}

module.exports = {
  postStadium,
  getStadium,
  updateStadium,
  deleteStadium,
}