const { request, response } = require('express');
const { players, directors, incidencias, bitacoras, teams_players, teams_directors } = require('../../database/models');

const transferPlayer = async (req = request, res = response) => {
  try {
    const { id_player, id_team_origin, id_team_destination } = req.body;
    const instantDate = new Date();
    const formatedDate = `${instantDate.getMonth()}-${instantDate.getDay()}-${instantDate.getFullYear()}`
    const transferedPlayer = await teams_players.update({
      end_date: formatedDate
    }, { where: {idPlayer: id_player, idTeam: id_team_origin, end_date: null}, returning: true, plain: true });

    if (!transferedPlayer) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al transferir el jugador',
        data: []
      });
    } else {

      const newTeamPlayer = await teams_players.create({
        idPlayer: id_player,
        idTeam: id_team_destination,
        start_date: formatedDate
      });

      if (!newTeamPlayer) {
        return res.status(500).json({
          status: 500,
          msj: 'Error al transferir el jugador - fase 2',
          data: []
        });
      } else {

        const bitacoraAdded = await bitacoras.create({
          id_player,
          id_team_origin,
          id_team_destination,
          transfer_date: formatedDate
        });

        if (!bitacoraAdded) {
          return res.status(500).json({
            status: 500,
            msj: 'Error al transferir el jugador - fase 3',
            data: []
          });
        } else {
          return res.status(200).json({
            status: 200,
            msj: 'Jugador actualizado',
            data: []
          });
        }
      }      
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al transferir el jugador',
      data: [],
      error
    });
  }
}

const tranferLog = async (req = request, res = response) => {
  try {
    const { id, idPlayer } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener la información de la bitácora de transferencias',
      data: []
    };

    let bitacora = null;
    if ( id ) {
      bitacora = [await bitacoras.findOne({where: {id}})];
    } else if (idPlayer) {
      bitacora = await bitacoras.findAll({where: {id_player: idPlayer}});
    } else {
      bitacora = await bitacoras.findAll();
    }

    if (bitacora) {
      response = {
        status: 200,
        msj: 'Información de la bitácora de transferencias',
        data: bitacora
      }
    }

    return res.status(response.status).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al obtener la información de la bitácora de transferencias',
      data: [],
      error
    });
  }
}

const transferCoach = async (req = request, res = response) => {
  try {
    const { id_coach, id_team_origin, id_team_destination } = req.body;
    const instantDate = new Date();
    const formatedDate = `${instantDate.getMonth()}-${instantDate.getDay()}-${instantDate.getFullYear()}`
    const transferedPlayer = await teams_directors.update({
      end_date: formatedDate
    }, { where: {idDirector: id_coach, idTeam: id_team_origin, end_date: null}, returning: true, plain: true });

    if (!transferedPlayer) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al transferir el jugador',
        data: []
      });
    } else {

      const newTeamPlayer = await teams_directors.create({
        idCoach: id_coach,
        idTeam: id_team_destination,
        start_date: formatedDate
      });

      if (!newTeamPlayer) {
        return res.status(500).json({
          status: 500,
          msj: 'Error al transferir el jugador - fase 2',
          data: []
        });
      } else {

        const bitacoraAdded = await bitacoras.create({
          id_coach,
          id_team_origin,
          id_team_destination,
          transfer_date: formatedDate
        });

        if (!bitacoraAdded) {
          return res.status(500).json({
            status: 500,
            msj: 'Error al transferir el jugador - fase 2',
            data: []
          });
        } else {
          return res.status(200).json({
            status: 200,
            msj: 'Jugador actualizado',
            data: []
          });
        }
      }      
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al transferir el jugador',
      data: [],
      error
    });
  }
}

const addIncidence = async (req = request, res = response) => {
  try {
    const { id_game, id_player, id_team, descripcion, minuto } = req.body;
    const createdIncidence = await incidencias.create({
      id_game,
      id_player,
      id_team,
      descripcion,
      minuto
    });
  
    if (!createdIncidence) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al intentar agregar incidencia',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Incidencia agregada con éxito',
        data: [createdSoccerGame]
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al intentar agregar incidencia',
      data: [],
      error
    });
  }
}

const getIncidence = async (req = request, res = response) => {
  try {
    const { id, idPartido } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener las incidencias',
      data: []
    }

    let incidencia = null;

    if (id) {
      incidencia = [await incidencias.findOne({where: {id}})];
    } else if (idPartido) {
      incidencia = await incidencias.findAll({where: {id_game: idPartido}});
    } else {
      incidencia = await incidencias.findAll();
    }

    if (incidencia) {
      response = {
        status: 200,
        msj: 'Información de las incidencias',
        data: incidencia
      }
    }

    return res.status(response.status).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al obtener las incidencias',
      data: [],
      error
    });
  }
}

const updatePerson = async (req = request, res = response) => {
  try {
    const { id_person, state, rol } = req.body;
    let updatedPerson = null;
    if (rol == 1) {
      updatedPerson = await players.update({
        state
      }, {where: {id: id_person}, returning: true, plain: true});
    } else {
      updatedPerson = await directors.update({
        state
      }, {where: {id: id_person}, returning: true, plain: true});
    }

    if (!updatedPerson) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al intentar actualizar el estado de la persona',
        data: []
      });  
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Estado de persona actualizado',
        data: [updatedPerson]
      });
    }    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al intentar actualizar el estado de la persona',
      data: [],
      error
    });
  }
}

module.exports = {
  transferPlayer,
  tranferLog,
  transferCoach,
  addIncidence,
  getIncidence,
  updatePerson
}
