const { request, response } = require('express');
const { teams } = require('../../database/models');

const postTeam = async (req = request, res = response) => {
  try {
    const { name, fundation_date, id_country, photo } = req.body;
    const createdTeam = await teams.create({
      name,
      foundation_date: fundation_date,
      idCountry: id_country,
      photo
    });

    if (!createdTeam) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al crear equipo',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Equipo creado con éxito',
        data: [createdTeam]
      })
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al crear equipo',
      data: [],
      error
    });
  }
}

const getTeam = async (req = request, res = response) => {
  try {
    const { id } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener los equipos',
      data: []
    };

    let team = [];

    if ( id ) {
      team = [await teams.findOne({where: {id}})];
    } else {
      team = await teams.findAll();
    }

    if (team) {
      response = {
        status: 200,
        msj: 'Información de equipos',
        data: team
      };
    }

    return res.status(response.status).json(response);
  } catch(error) {
    console.error(error);
    return response = res.status(500).json({
      status: 500,
      msj: 'Error al obtener los equipos',
      data: [],
      error
    });
  }
}

const updateTeam = async (req = request, res = response) => {
  try {
    const { id, name, fundation_date, id_country, photo } = req.body;
    const updatedTeam = await teams.update(
      {name, foundation_date: fundation_date, idCountry: id_country, photo },
      { where: {id}, returning: true, plain: true }
    );

    if (!updatedTeam) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al actualizar equipo',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Equipo actualizado',
        data: [{ id, name, fundation_date, id_country, photo }]
      })
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al actualizar equipo',
      data: [],
      error
    });
  }
}

const deleteTeam = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const deletedTeam = await teams.destroy({ where: { id } });

    if (!deletedTeam) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al eliminar equipo',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Equipo eliminado',
        data: []
      })
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al eliminar equipo',
      data: [],
      error
    });
  }
}

module.exports = {
  postTeam,
  getTeam,
  updateTeam,
  deleteTeam,
}