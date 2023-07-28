const { request, response } = require('express');
const { competitions } = require('../../database/models');

const postCompetition = async ( req = request, res = response ) => {
  try {
    const { name, type, year, champion_team, country } = req.body;
    const createdCompetition = await competitions.create({
      name,
      year,
      type,
      idCountry: country,
      championTeam: champion_team
    });

    if (!createdCompetition) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al crear competencia',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Competition created successfully”',
        data: [createdCompetition]
      })
    }
  } catch( error ) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al crear competencia',
      data: [],
      error
    });  
  }
}

const getCompetition = async (req = request, res = response) => {
  try {
    const { championship } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener las competencias',
      data: []
    };

    let competencia = [];

    if ( championship ) {
      competencia = [await competitions.findOne({where: {id: championship}})];
    } else {
      competencia = await competitions.findAll();
    }

    if (competencia) {
      response = {
        status: 200,
        msj: 'Información de las competencias',
        data: competencia
      };
    }

    return res.status(response.status).json(response);
  } catch(error) {
    console.error(error);
    return response = res.status(500).json({
      status: 500,
      msj: 'Error al obtener las competencias',
      data: [],
      error
    });
  }
}

const updateCompetition = async (req = request, res = response) => {
  try {
    const { id_competition, name, type, year, champion_team, country } = req.body;
    const updatedCompetition = await competitions.update(
      { name, year, type, idCountry: country, championTeam: champion_team },
      { where: {id: id_competition}, returning: true, plain: true }
    );

    if (!updatedCompetition) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al actualizar competencia',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'competition updated successfully”',
        data: [{ id_competition, name, type, year, champion_team, country }]
      })
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al actualizar competencia',
      data: [],
      error
    });
  }
}

const deleteCompetition = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const deletedCompetition = await competitions.destroy({ where: { id } });

    if (!deletedCompetition) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al eliminar competencia',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Operation completed successfully',
        data: []
      })
    }
  } catch(error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al eliminar competencia',
      data: [],
      error
    });
  }
}

module.exports = {
  postCompetition,
  getCompetition,
  updateCompetition,
  deleteCompetition,
}