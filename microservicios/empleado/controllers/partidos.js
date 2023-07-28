const { request, response } = require('express');
const { soccer_games } = require('../../database/models');

const postSoccerGame = async (req = request, res = response) => {
  try {
    const { game_date, attendees, result_local, result_visiting, state, id_stadium, id_team_local, id_team_visiting, id_competition } = req.body;
    const createdSoccerGame = await soccer_games.create({
      game_date,
      attendees,
      result_local,
      result_visiting,
      state,
      idStadium: id_stadium,
      idTeamLocal: id_team_local,
      idTeamVisiting: id_team_visiting,
      idCompetition: id_competition
    });

    if (!createdSoccerGame) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al guardar el partido',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Partido guardado con éxito',
        data: [createdSoccerGame]
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al guardar el partido',
      data: [],
      error
    });
  }
}

const updateSoccerGame = async (req = request, res = response) => {
  try {
    const { id_game, game_date, attendees, result_local, result_visiting, state, id_stadium, id_team_local, id_team_visiting, id_competition } = req.body;
    const updatedSoccerGame = await soccer_games.update(
      {
        game_date,
        attendees,
        result_local,
        result_visiting,
        state,
        idStadium: id_stadium,
        idTeamLocal: id_team_local,
        idTeamVisiting: id_team_visiting,
        idCompetition: id_competition
      },
      { where: {id: id_game}, returning: true, plain: true }
    );

    if (!updatedSoccerGame) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al actualizar partido',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Partido actualizado',
        data: [updatedSoccerGame]
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al actualizar partido',
      data: [],
      error
    });
  }
}

const getSoccerGame = async (req = request, res = response) => {
  try {
    const { id } = req.query;
    
    let response = {
      status: 500,
      msj: 'Error al obtener los partidos',
      data: []
    };

    let soccerGame = null;

    if ( id ) {
      soccerGame = [await soccer_games.findOne({where: {id}})];
    } else {
      soccerGame = await soccer_games.findAll();
    }

    if (soccerGame) {
      response = {
        status: 200,
        msj: 'Información de los partidos',
        data: soccerGame
      }
    }

    return res.status(response.status).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al obtener los partidos',
      data: [],
      error
    });
  }
}

const deleteSoccerGame = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const deletedSoccerGame = await soccer_games.destroy({ where: {id} });

    if (!deletedSoccerGame) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al eliminar el partido',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Partido eliminado',
        data: []
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al eliminar el partido',
      data: [],
      error
    });
  }
}

module.exports = {
  postSoccerGame,
  updateSoccerGame,
  getSoccerGame,
  deleteSoccerGame,
}