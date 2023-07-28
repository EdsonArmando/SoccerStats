const { users, authentications, log_memberships ,teams_users, countries, quiniela_users } =  require('../../database/models');

const jwt = require('jsonwebtoken');
const Mailer = require('../external-services/email/mail');
const email_structure = require('../external-services/email/emails-structure')
const functions = require('../auxiliary-functions/functions')
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('soccerstats', 'admin', 'softwareavanzado', {
    host: 'soccerstats.clhldirk17aw.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})
function sendResponse(res, status, msg, data) {
    return res.status( status ).send({ status, msg, data });
}

function generateToken(user) {
    return jwt.sign(
        {
            id_usuario: user.id,
            id_rol: parseInt(user.rol),
        },
        'SiSaleSA_',
        {
            expiresIn: '120s',
        }
    );
}

const getClient = async (req, res) => {
    try {
        const { id } = req.query;
        // TODO: debe ser base64? o la url?
        let [results, metadata] = await sequelize.query(
            `SELECT
            u.first_name as name,
            u.last_name as lastname,
            u.email,
            u.phone,
            u.photo,
            u.gender,
            u.birth_date,
            u.location as address,
            TIMESTAMPDIFF(YEAR, u.birth_date, CURDATE()) AS age,
            u.idCountry as id_country,
            c.name as country
            FROM users as u
                JOIN countries as c on u.idCountry = c.id
                WHERE u.id = ${id};`,
        );

        if (results == null) {
            return sendResponse(res, 400, "Error al obtener el usuario", []);
        }

        return sendResponse(res, 200, "Usuario obtenido con éxito", results);

    } catch (error) {
        return sendResponse(res, 400, "Error al obtener el usuario", []);
    }
}

const deleteClient = async (req, res) => {
    try {
        let { id } = req.query;

        const user = await users.update(
            { status: 3 },
            { where: { id } }
        );

        if (user[0] == 0) {
            return sendResponse(res, 400, "Error al eliminar el usuario.", []);
        }

        return sendResponse(res, 200, "Usuario eliminado con éxito.", []);
    } catch (error) {
        return sendResponse(res, 400, "Error al eliminar el usuario.", []);
    }
}

const getPartidos = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(
            'select s1.game_date, s1.attendees, s1.result_local, s1.result_visiting, sta.name, cp.name,  t.name as local, t1.name as visiting\n' +
            'FROM soccer_games as s1\n' +
            'inner join stadiums as sta on sta.id =s1.idStadium\n' +
            'inner join competitions as cp on cp.id= s1.idCompetition\n' +
            'inner join teams as t on t.id = s1.idTeamLocal\n' +
            'inner join teams as t1 on t1.id = s1.idTeamVisiting;'
        );
        return sendResponse(res, 200, "Partidos para membresía gratuita", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener informacion de los partidos", []);
    }
}

const membership = async (req, res) => {
    try {
        const {id_client} = req.body;

        const created = await log_memberships.create({idUser: id_client})

        if (!created) {
            return sendResponse(res, 400, "Error al comprar membresía", []);
        }

        await users.update(
            { isMember: 1 },
            { where: { id: id_client } }
        );

        return sendResponse(res, 200, "Membresía comprada con éxito", []);
   } catch (error) {
        return sendResponse(res, 400, "Error al comprar membresía", []);
    }
}

const removeMembership = async (req, res) => {
    try {
        const { id_client } = req.query;
        
        const user = await users.update(
            { isMember: 0 },
            { where: { id: id_client } }
        );

        if (user[0] == 0) {
            return sendResponse(res, 400, "Error al cancelar membresía.", []);
        }

        return sendResponse(res, 200, "Membresía cancelada con éxito.", []);
    } catch (error) {
        return sendResponse(res, 400, "Error al cancelar membresía.", []);
    }
}

const sendResetEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await users.findOne({ where: { email } });

        if (user == null)  return sendResponse(res, 400, "Error al enviar la contraseña temporal.", []);

        const token = generateToken(user);
        let password = functions.generatePassword();
        Mailer.sendMail(email_structure.clientResetPassword(user.email, password, token));

        const [results] = await sequelize.query(
            'delete from authentications where idUser = :idUser;',
            {
                replacements: { idUser: user.id }
            }
        );

        await authentications.create({ password: functions.encrypt(password), idUser: user.id, email: user.email })
        return sendResponse(res, 200, "Se ha enviado un correo para restablecer la contraseña.", []);

    } catch (error) {
        return sendResponse(res, 400, "Error al enviar la contraseña temporal.", []);
    }
}

const resetPassword = async (req, res) => {
    try {
        const { email, new_password, temporal_password } = req.body;

        const [results] = await sequelize.query(
            `SELECT u.email, u.id, max(au.createdAt), au.password
                FROM users as u
                INNER JOIN authentications as au on u.id= au.idUser
                WHERE u.email = '${email}'
                GROUP BY u.id;`
        );

        if (results == null)  return sendResponse(res, 400, "Error al restablecer la contraseña.", []);

        if (!functions.comparePassword(temporal_password, results[0].password)){
            return sendResponse(res, 400, "Las contraseñas no coinciden", []);
        }

        await authentications.update(
            { isActive: 0 },
            { where: { email } }
        );

        const result = await users.update(
            { password: functions.encrypt(new_password) },
            { where: { email } }
        );

        return sendResponse(res, 200, "Se ha restablecido la contraseña", []);
    } catch (error) {
        return sendResponse(res, 400, "Error al restablecer la contraseña.", []);
    }
}

const follow = async (req, res) => {
    try {
        const { id_client, id_team } = req.body;
        const user = await teams_users.create({
            idUser: id_client,
            idTeam: id_team
          });
        if( user==null ) {
            return sendResponse(res, 400, "El usuario no puede asignar equipo favorito", user);
        }
        return sendResponse(res, 200, "Siguiendo a un equipo", user);
    } catch (error) {
        return sendResponse(res, 400, "Error al seguir equipo", []);
    }
}


const getTeams = async (req, res) => {
    try {
        const { id_client } = req.body;
        const [results, metadata] = await sequelize.query(
            'select t.id, t.name, t.foundation_date, c.nicename from teams as t\n' +
            'inner join countries as c on c.id= t.idCountry\n'+
            'inner join teams_users as tu on tu.idTeam= t.id and tu.idUser!= :idUser;',
            {
                replacements: { idUser: id_client }
            }
          );
        return sendResponse(res, 200, "Equipos solicitados exitosamente", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener informacion de equipos", []);
    }
}

// TODO: debe ser base64? o la url?
const getFavoriteTeams = async (req, res) => {
    try {
        const { id_client } = req.query;
        let [results, metadata] = await sequelize.query(
            `SELECT t.id, t.name, date_format(t.foundation_date, "%Y-%m-%d") as foundation_date, t.photo, t.idCountry, c.name as country
                    FROM teams_users as tu
                    JOIN teams as t ON t.id = tu.idTeam
                    JOIN countries as c on t.idCountry = c.id
                    WHERE tu.idUser =  ${id_client};`,
        );

        return sendResponse(res, 200, "Favoritos obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener los equipos favoritos.", []);
    }
}

// Las noticias de mis equipos favoritos
// RUTA: http://localhost:5001/my-favorite-notices/:id (id del usuario)
const myNotices = async (req, res) => {
    let { id } = req.params;
    try {
        const [results, metadata] = await sequelize.query(
            'select n.*, t.id as idTeam from teams_users\n' +
            'join teams t on t.id = teams_users.idTeam\n' +
            'join users u on teams_users.idUser = u.id\n' +
            'join notices n on t.id = n.idTeam\n' +
            'where u.id = :idClient;',
            {
                replacements: { idClient: id }
            }
        );
        return sendResponse(res, 200, "Informacion de mis noticias favoritas", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener mis noticias favoritas", []);
    }
}


const prediction = async (req, res) => {
    var result = [];

    const { team_home, team_visitor, id_competition } = req.body;

    let [soccer_games, metadata] = await sequelize.query(
        `SELECT 
            sg.idTeamLocal as team_home, 
            sg.idTeamVisiting as team_visitor, 
            sg.result_local as goal_home,
            sg.result_visiting as goal_visitor
         FROM soccer_games AS sg
         WHERE idCompetition = ${id_competition}
         AND (sg.idTeamLocal IN (${team_home}, ${team_visitor}) OR sg.idTeamVisiting IN (${team_home}, ${team_visitor}))`
    );

    let historial = soccer_games;

    var totalHomeGoals = historial.map(item => item.goal_home).reduce((previous, current) => previous + current, 0);
    var totalVisitorsGoals = historial.map(item => item.goal_visitor).reduce((previous, current) => previous + current, 0);
    var countGamesPlayed = historial.length;

    var averageHomeGoals = totalHomeGoals / countGamesPlayed;
    var averageVisitorsGoals = totalVisitorsGoals / countGamesPlayed;

    var teamHome  = historial.filter((value) => value.team_home == team_home);
    var teamVisitor = historial.filter((value) => value.team_visitor == team_visitor);

    if (teamHome.length == 0 || teamVisitor.length == 0) {
        return sendResponse(res, 200, "Alguno de los equipos no tiene un juego registrado. Es imposible calcular una probabilidad", []);
    }

    var totalScoredHome = teamHome.map(item => item.goal_home).reduce((previous, current, team) => previous + current, 0);
    var totalConcededHome = teamHome.map(item => item.goal_visitor).reduce((previous, current, team) => previous + current, 0);
    var totalHomeGames = teamHome.length;

    var totalScoredVisitors = teamVisitor.map(item => item.goal_visitor).reduce((previous, current, team) => previous + current, 0);
    var totalConcededVisitors = teamVisitor.map(item => item.goal_home).reduce((previous, current, team) => previous + current, 0);
    var totalVisitorsGames = teamVisitor.length;

    var localAttackForce = (totalScoredHome / totalHomeGames) / averageHomeGoals;
    var localDefenseForce = (totalConcededHome / totalHomeGames) / averageHomeGoals;

    var visitorsAttackForce = (totalScoredVisitors / totalVisitorsGames) / averageVisitorsGoals;
    var visitorsDefenseForce = (totalConcededVisitors / totalVisitorsGames) / averageVisitorsGoals;

    var expectedHomeGoals = localAttackForce * visitorsDefenseForce * averageHomeGoals;
    var expectedVisitorsGoals = visitorsAttackForce  * localDefenseForce * averageVisitorsGoals;

    for (let i = 0; i < 5; i++) {
        var home_team_result = calculatePoisson(expectedHomeGoals, expectedHomeGoals, i);
        var visitor_team_result = calculatePoisson(expectedVisitorsGoals, expectedVisitorsGoals, i);
        result[i] = { home_team_result, visitor_team_result };
    }

    var estimateGoalsHome = returnMax(result.map(item => item.home_team_result));
    var estimateGoalsVisitors = returnMax(result.map(item => item.visitor_team_result));

    return sendResponse(res, 200, `Predicción de resultado del partido entre los equipos: ${ team_home } - ${ team_visitor }`, { estimateGoalsHome, estimateGoalsVisitors });
};

function factorial(n)
{
    if (n == 0){
        return 1;
    }
    return n * factorial(n-1);
}

function calculatePoisson(lambda, k, index)
{
    let f = factorial(index);
    return ((Math.pow(2.71828, -lambda) * Math.pow(k, index)) / f )  * 100;
}

function returnMax(array)
{
    return array.indexOf(Math.max(...array));
}

module.exports = {
    getClient,
    deleteClient,
    membership,
    removeMembership,
    getFavoriteTeams,
    sendResetEmail,
    resetPassword,
    getPartidos,
    follow,
    getTeams,
    myNotices,
    prediction,
}