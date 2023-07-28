const { notices, team_user } = require('../../database/models');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('soccerstats', 'admin', 'softwareavanzado', {
    host: 'soccerstats.clhldirk17aw.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
});

function sendResponse(res, status, msj, data) {
    return res.status(status).send({status, msj, data});
}

const initNoticias = async (req, res) => {
    return sendResponse(res, 200, "Bienvenido al servicio de Noticias", []);
}

/*Metodo que recibe los datos de las noticias
{
    id_team: number,
    title: string,
    description : string, 
    date: date
}
*/
const noticetea = async (req, res) => {
    try {
        let {id_team, title, description, date, idUser,photo} = req.body;
        photo = "";
        const noticia = await notices.create({ title: title, description: description, date: date, photo: photo, idTeam: id_team, idUser: idUser });
        return sendResponse(res, 200, "Noticia creado correctamente", noticia);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error al crear la noticia", []);
    }
}

/*
Devuelve todas las noticias dependiendo del query param
    RUTA: http://localhost:5001/notice?team=1 */
const getNoticias = async (req, res) => {
    let {id, team} = req.query;

    if(team != null){
        try {
            data = await notices.findAll({
              where: {
                idTeam: team
              }
            });
            return sendResponse(res, 200, "Todas las Noticias del equipo", data);
        } catch (error) {
            console.log(error);
            return sendResponse(res, 400, "Error al crear la noticia", []);
        }
    }else if(id != null){
        try {
            data = await notices.findAll({
              where: {
                id: id
              }
            });
            return sendResponse(res, 200, "Informacion de la noticia", data);
        } catch (error) {
            console.log(error);
            return sendResponse(res, 400, "Error al crear la noticia", []);
        }
    }else{
        try {
            data = await notices.findAll();
            return sendResponse(res, 200, "Todas las Noticias", data);
        } catch (error) {
            return sendResponse(res, 400, "Error al crear la noticia", []);
        }
    }
}


module.exports = {
    initNoticias,
    noticetea,
    getNoticias
}