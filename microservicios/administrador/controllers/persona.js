const { request, response } = require('express');
const { players, directors, teams_players, teams_directors, users } = require('../../database/models');
const Mailer = require('../external-services/email/mail');
const email_structure = require('../external-services/email/emails-structure')
const functions = require('../auxiliary-functions/functions')
const AWS = require('aws-sdk');
const aws_keys = require('../external-services/aws/awsKeys');
const s3 = new AWS.S3(aws_keys.s3);


function sendResponse(res, status, msj, data) {
  return res.status(status).send({status, msj, data});
}

const postPersona = async (req = request, res = response) => {
  try {
    const { name, lastname, birthday, nationality, position, status, id_team, photo, rol, fechaEquipo } = req.body;
    let responseData = {};
    let createdPerson = null;
    if (rol == 1){
      createdPerson = await players.create({
        name,
        lastname,
        birthdate: birthday,
        idCountry: nationality,
        position: (position === 1) ? 'Portero' : (position === 2) ? 'Defensa' : (position === 3) ? 'Medio' : 'Delantero',
        status: parseInt(status),
        photo
      });
    } else {
      createdPerson = await directors.create({
        name,
        lastname,
        birthdate: birthday,
        idCountry: nationality,
        status: parseInt(status),
        photo
      });
    }

    responseData.createdPerson = createdPerson;
    if(!createdPerson){
      return res.status(500).json({
        status: 500,
        msj: 'Error al crear jugador o dt',
        data: []
      });  
    } else {
      
      let addedTeam = null;
      if (rol === 1){ //Jugadores
        addedTeam = await teams_players.create({
          idPlayer: createdPerson.id,
          idTeam: id_team,
          start_date: fechaEquipo || '31-12-1999'
        });
      } else { //DT
        addedTeam = await teams_directors.create({
          idDirector: createdPerson.id,
          idTeam: id_team,
          start_date: fechaEquipo || '31-12-1999'
        });
      }

      responseData.addedTeam = addedTeam;
      if (!addedTeam){
        return res.status(500).json({
          status: 500,
          msj: 'Error al crear jugador o dt',
          data: []
        });  
      } else {
        createdPerson.addedTeam = addedTeam;
        return res.status(200).json({
          status: 200,
          msj: 'Jugador o DT creado con exito',
          data: [responseData]
        });
      }      
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al crear jugador o dt',
      data: [],
      error
    });
  }
}

const updatePersona = async (req = request, res = response) => {
  try {
    const { id_person, name, lastname, birthday, nationality, position, status, id_team, photo, rol, fechaEquipo } = req.body;
    let responseData = {};
    let updatedPerson = null;
    if (rol == 1){
      let body = {
        name,
        lastname,
        birthdate: birthday,
        idCountry: nationality,
        position: (position === 1) ? 'Portero' : (position === 2) ? 'Defensa' : (position === 3) ? 'Medio' : 'Delantero',
        status: parseInt(status),
        photo
      };

      updatedPerson = await players.update(body, {where: {id: id_person}, returning: true, plain: true});
      body.id = id_person;
      responseData.updatedPerson = body;
    } else {
      let body = {
        name,
        lastname,
        birthdate: birthday,
        idCountry: nationality,
        status: parseInt(status),
        photo
      }

      updatedPerson = await directors.update(body, {where: {id: id_person}, returning: true, plain: true});
      body.id = id_person;
      responseData.updatedPerson = body;
    }    
    
    if(!updatedPerson){
      return res.status(500).json({
        status: 500,
        msj: 'Error al actualizar jugador o dt',
        data: []
      });  
    } else {
      let addedTeam = null;
      
      if (rol === 1){ //Jugadores
        addedTeam = await teams_players.findOne({where: {idPlayer: id_person, idTeam: id_team}});
        
        if ( addedTeam.isNewRecord ){
          addedTeam = await teams_players.create({
            idPlayer: id_person,
            idTeam: id_team,
            start_date: fechaEquipo || '31-12-1999'
          });
        }
      } else { //DT
        addedTeam = await teams_directors.findOne({where: {idDirector: id_person, idTeam: id_team}});

        if ( addedTeam.isNewRecord ){
          addedTeam = await teams_directors.create({
            idDirector: id_person,
            idTeam: id_team,
            start_date: fechaEquipo || '31-12-1999'
          });
        }        
      }

      responseData.addedTeam = addedTeam;
      if (!addedTeam){
        return res.status(500).json({
          status: 500,
          msj: 'Error al actualizar jugador o dt',
          data: []
        });  
      } else {
        return res.status(200).json({
          status: 200,
          msj: 'Jugador o DT actualizado con exito',
          data: [responseData]
        });
      }      
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al crear jugador o dt',
      data: [],
      error
    });
  }
}

const getPersona = async (req = request, res = response) => {
  try{
    const { id_person, rol } = req.body;

    let response = {
      status: 500,
      msj: 'Error al obtener los jugadores o dt',
      data: []
    }

    let persona = []

    if ( id_person === -1 ){ // ? Todos los registros
      if (rol === 1){ // Jugadores
        const personaItem = await players.findAll();
        const equipos = await teams_players.findAll();
        const item = {
          persona: personaItem,
          equipos
        }
        persona = [item];
      } else {
        const personaItem = await directors.findAll();
        const equipos = await teams_directors.findAll();
        const item = {
          persona: personaItem,
          equipos
        }
        persona = [item];
      }
    } else { // ? Solo un registro
      if (rol === 1){ // Jugadores
        const personaItem = await players.findOne({where: {id: id_person}});
        const equipos = await teams_players.findAll({where: {idPlayer: id_person}});
        const item = {
          persona: personaItem,
          equipos
        }
        persona = [item];
      } else {
        const personaItem = await directors.findOne({where: {id: id_person}});
        const equipos = await teams_directors.findAll({where: {idDirector: id_person}});
        const item = {
          persona: personaItem,
          equipos
        }
        persona = [item];
      }
    }

    if (persona) {
      response = {
        status: 200,
        msj: 'Información de personas',
        data: persona
      }
    }

    return res.status(response.status).json(response);
  } catch(error) {
    console.error(error);
    return response = res.status(500).json({
      status: 500,
      msj: 'Error al obtener los jugadores o dt',
      data: [],
      error
    });
  }
}

const deletePersona = async (req = request, res = response) => {
  try {
    const { id_person, rol } = req.body;

    let response = {
      status: 500,
      msj: 'Error al eliminar jugador o dt',
      data: []
    }

    let persona = []

    if (rol === 1){ // Jugadores
      persona = await players.destroy({ where: { id: id_person } });
    } else { // DT
      persona = await directors.destroy({ where: { id: id_person } });
    }

    if (persona) {
      response = {
        status: 200,
        msj: 'Jugador o DT eliminado',
        data: []
      }
    }

    return res.status(response.status).json(response);
  } catch( error ) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      msj: 'Error al eliminar jugador o dt',
      data: []
    });  
  }
}

const createStaff = async (req, res) => {
  try {
    const { first_name, last_name, birth_date, email, phone, gender, idCountry, rol } = req.body;
    let password = functions.generatePassword();
    const [user, created] = await users.findOrCreate({
      where: { email: email },
      defaults: {
        first_name, last_name, birth_date, email, phone, gender, isMember: 0, idCountry, status : 1, password: functions.encrypt(password), rol
      }
    });

    if( !created ) {
      return sendResponse(res, 400, "El usuario ya existe", user);
    }

    uploadPhoto(req, res, user.id);
    Mailer.sendMail(email_structure.sendCredencials(user.email, password));
    return sendResponse(res, 200, "Usuario creado", user);
  } catch (error) {
    return sendResponse(res, 400, "Error al crear el usuario", []);
  }
}

const uploadPhoto = async (req, res, id) => {
  const { photo} = req.body;
  let decodedImage = Buffer.from(photo, 'base64');
  let bucket = 'sag12';
  let filepath = `SA/admin_${id}.jpg`;

  let uploadParamsS3 = {
    Bucket: bucket,
    Key: filepath,
    Body: decodedImage,
    ACL: 'public-read',
  };

  s3.upload(uploadParamsS3, async function sync(err) {
    if (!err) {
      await users.update(
          { photo: `https://sag12.s3.amazonaws.com/${filepath}` },
          { where: { id }}
      );
    }
  });
}


module.exports = {
  postPersona,
  updatePersona,
  getPersona,
  deletePersona,
  createStaff,
}