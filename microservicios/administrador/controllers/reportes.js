const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('soccerstats', 'admin', 'softwareavanzado', {
    host: 'soccerstats.clhldirk17aw.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

function sendResponse(res, status, msj, data) {
    return res.status(status).send({status, msj, data});
}
/*
    Usuarios Suscritos a X equipo
    RUTA: http://localhost:5002/esb/admin/report/subscribe/?equipo=6
 */
const getReporte1 = async (req, res) => {
    const { id_team } = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT u.id AS id,
                       u.first_name AS name,
                       u.lASt_name AS lastname,
                       c.name AS nationality,
                       u.photo
                FROM teams_users AS t, users AS u, teams AS te, countries AS c
                WHERE t.idUser = u.id
                  AND u.idCountry = c.id
                  AND t.idTeam = te.id
                  AND t.idTeam = ${id_team}`
        );
        return sendResponse(res, 200, "Usuarios suscritos al equipo x obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener usuarios suscritos al equipo x.", []);
    }
}
/*
    Usuario Con o Sin Membresía
    RUTA: http://localhost:5002/esb/admin/report/membership/
 */
const getReporte2 = async (req, res) => {
    const { membership } = req.query;

    try {
        const [results, metadata] = await sequelize.query(
            `SELECT
                    u.id AS id_user,
                    u.first_name AS name,
                    u.last_name AS lastname,
                    c.name AS nationality,
                    u.photo
                FROM users AS u
                inner join countries AS c on u.idCountry = c.id
                AND u.isMember = ${membership}`
        );
        return sendResponse(res, 200, "Usuarios con o sin membresia ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error al devolver el reporte", []);
    }
}
/*
    Usuarios que Mas membresías han adquirido
    RUTA: http://localhost:5002/esb/admin/report/memberships
 */
const getReporte3 = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT u.id AS id,
                       u.first_name AS name,
                       u.last_name AS lastname,
                       c.name AS nationality,
                       u.photo,
                       count(lm.idUser) AS amount
                FROM log_memberships AS lm
                INNER JOIN users u on lm.idUser = u.id
                INNER JOIN countries c on u.idCountry = c.id
                GROUP BY lm.idUser
                order by count(lm.idUser) desc
                LIMIT 10;`
        );
        return sendResponse(res, 200, "Usuarios con mas membresías obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener usuarios con mas membresías.", []);
    }
}
/*
    Usuarios que más dinero han gastado
    RUTA: http://localhost:5002/esb/admin/report/expenses
 */
const getReporte4 = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT u.id AS id,
                       u.first_name AS name,
                       u.last_name AS lastname,
                       c.name AS nationality,
                       u.photo,
                       count(lm.idUser) * 15 AS amount
                FROM log_memberships AS lm
                INNER JOIN users u on lm.idUser = u.id
                INNER JOIN countries c on u.idCountry = c.id
                GROUP BY lm.idUser
                order by count(lm.idUser) desc
                LIMIT 10;`
        );
        return sendResponse(res, 200, "Usuarios con mas dinero gastado obtenidos con éxito.", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error al obtener usuarios con mas dinero gastado.", []);
    }
}
/*
    Usuarios de X País
    RUTA: http://localhost:5002/esb/admin/report/country/?pais=1
 */
const getReporte5 = async (req, res) => {
    const {id_country} = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT
                    u.id AS id,
                    u.first_name AS name,
                    u.last_name AS lastname,
                    u.photo
                FROM users AS u, countries AS c
                WHERE u.idCountry = c.id AND c.id = ${id_country}`
        );
        return sendResponse(res, 200, "Usuarios de x país obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener usuarios de x país.", []);
    }
}
/*
    Usuarios de X genero
    RUTA: http://localhost:5002/esb/admin/report/genero/?genero=1
 */
const getReporte6 = async (req, res) => {
    const { gender } = req.query;

    try {
        const [results, metadata] = await sequelize.query(
            `SELECT
                    u.id AS id,
                    u.first_name AS name,
                    u.last_name AS lastname,
                    u.photo,
                    u.idCountry AS nationality
                FROM users AS u
                WHERE u.gender = '${gender}';`
        );
        return sendResponse(res, 200, "Usuarios de x genero obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener usuarios de x genero.", []);
    }
}
/*
    Usuarios con al menos X años de edad
    RUTA: http://localhost:5002/esb/admin/report/age/?edad=19
 */
const getReporte7 = async (req, res) => {
    const { age } = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT
                    u.id AS id,
                    u.first_name AS name,
                    u.last_name AS lastname,
                    u.photo,
                    c.name AS nationality,
                    date_format(u.birth_date, "%Y-%m-%d") as birth_date,
                    sub.age AS age
                FROM users AS u, (
                    SELECT u.id AS id_user, u.idCountry,
                            (2022 - YEAR(u.birth_date)) AS age
                            FROM users AS u) AS sub
                INNER JOIN countries AS c on c.id = sub.idCountry
                WHERE u.id = sub.id_user and sub.age >= ${age};`
        );
        return sendResponse(res, 200, "Usuarios con al menos x años de edad, obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener usuarios con al menos x años de edad.", []);
    }
}
/*
    Reportes de noticias
    1. Empleados que mas/menos han publicado
    RUTA: http://localhost:5002/esb/admin/report/news?option=desc
    O
    RUTA: http://localhost:5002/esb/admin/report/news?option=asc
*/
const getReporte8 = async (req, res) => {
    let { option } = req.query;
    option = (option === '1') ? 'asc' : 'desc';
    try {
        const [results, metadata] = await sequelize.query(
            `select
                    n.idUser AS id,
                    u.first_name AS name,
                    u.last_name AS lastname,
                    c.name AS nationality,
                    u.photo,
                    count(n.idUser) AS count
                from notices AS n , users AS u
                inner join countries c on u.idCountry = c.id
                where n.idUser = u.id
                group by n.idUser
                order by count ${option}
                LIMIT 10;`);
        return sendResponse(res, 200, "Empleados con mas o menos noticias publicadas, obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener empleados con mas o menos noticias publicadas.", []);
    }
}
/*
    Reporte 2
    2. Empleados que mas/menos han publicado x equipo
    RUTA:http://localhost:5002/esb/admin/report/news/team/?equipo=2&option=asc
 */

const getReporte9 = async (req, res) => {
    let { option, id_team } = req.query;
    option = (option === '1') ? 'asc' : 'desc';
    try {
        const [results, metadata] = await sequelize.query(
            `select
                    n.idUser AS id,
                    u.first_name AS name,
                    u.last_name AS lastname,
                    c.name AS nationality,
                    u.photo,
                    count(n.idUser) AS count
                from notices AS n , users AS u
                inner join countries c on u.idCountry = c.id
                where n.idUser = u.id
                and n.idTeam = ${id_team}
                group by n.idUser
                order by count ${option}
                LIMIT 10;`);
        return sendResponse(res, 200, "Empleados con mas o menos noticias publicadas de x equipo, obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener empleados con mas o menos noticias publicadas de x equipo.", []);
    }
}

const getReporte10 = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT b.id,
                       p.name AS user_name,
                       p.lastname AS user_lastname,
                       p.photo AS user_photo,
                       'PLAYER' AS user_rol,
                       'transfer player' AS action,
                        date_format(b.createdAt, "%Y-%m-%d") as date,
                       'Se transferió al jugador de equipo' AS description,
                       'TEAMS_PLAYERS' AS database_table
                FROM bitacoras AS b
                JOIN players p on b.id_player = p.id;`);

        return sendResponse(res, 200, "Bitácora de los administradores obtenida con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener bitácora de los administradores.", []);
    }
}

module.exports = {
    getReporte1,
    getReporte2,
    getReporte3,
    getReporte4,
    getReporte5,
    getReporte6,
    getReporte7,
    getReporte8,
    getReporte9,
    getReporte10,
}