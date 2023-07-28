const { request, response } = require('express');
const { quinielas } = require('../../database/models');

const createQuiniela = async (req = request, res = response) => {
  try {
    const { name, date, status, idTeam1, idTeam2 } = req.body;
    const createdQuiniela = await quinielas.create({
      name,
      date, 
      status,
      idTeam1,
      idTeam2,
      scoreTeam1: 0,
      scoreTeam2: 0
    });

    if (!createdQuiniela) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al crear la quiniela',
        data: []
      });
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Quiniela creada',
        data: [createdQuiniela]
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al crear la quiniela',
      data: [],
      error
    });
  }
}

const getQuiniela = async (req = request, res = response) => {
  try {
    const { id } = req.query;

    let response = {
      status: 500,
      msj: 'Error al obtener las quinielas',
      data: []
    }

    let quiniela = null;

    if (id) {
      quiniela = [await quinielas.findOne({where: {id}})];
    } else {
      quiniela = await quinielas.findAll();
    } 

    if (quiniela) {
      response = {
        status: 200,
        msj: 'Información de las quinielas',
        data: quiniela
      }
    }

    return res.status(response.status).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al obtener las quinielas',
      data: [],
      error
    });
  }
}

const updateQuiniela = async (req = request, res = response) => {
  try {
    const { id, status, scoreTeam1, scoreTeam2 } = req.body;
    const updatedQuiniela = await quinielas.update({
      status,
      scoreTeam1,
      scoreTeam2
    }, {where: {id}, returning: true, plain: true});

    if (!updatedQuiniela) {
      return res.status(500).json({
        status: 500,
        msj: 'Error al actualizar la quiniela',
        data: []
      });  
    } else {
      return res.status(200).json({
        status: 200,
        msj: 'Quiniela actualizada',
        data: [updatedQuiniela]
      });
    }    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al actualizar la quiniela',
      data: [],
      error
    });
  }
}

module.exports = {
  createQuiniela,
  getQuiniela,
  updateQuiniela
}