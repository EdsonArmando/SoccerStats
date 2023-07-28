const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('soccerstats', 'admin', 'softwareavanzado', {
    host: 'soccerstats.clhldirk17aw.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

function sendResponse(res, status, msg, data) {
    return res.status( status ).send({ status, msg, data });
}
const initReportes = async (req, res) => {

    return sendResponse(res, 200, "reportes de los clientes con memebresia", []);
}
/*
    Usuarios Suscritos a X equipo
    RUTA: http://localhost:5000/report/1/?id_team=1&player=0
 */
const getReporte1 = async (req, res) => {
    let {id_team, player} = req.query;
    //Son Jugadores
    if(player == 0){
        try {
            const [results, metadata] = await sequelize.query(
                'select p.id as id, p.name as name, p.lastname as lastname, c.name as nationality, p.photo as photo, p.position as position \n' +
                'from players as p, teams as t, teams_players tp, countries as c\n' +
                'where p.id = tp.idPlayer and tp.idTeam = t.id and p.idCountry = c.id and t.id = :idTeam;',
                {
                    replacements: { idTeam: id_team }
                }
            );
            return sendResponse(res, 200, "Jugadores suscritos a x equipos: ", results);
        } catch (error) {
            console.log(error);
            return sendResponse(res, 400, "Error ejecutar la consulta", []);
        }
    }else{
        try {
            const [results, metadata] = await sequelize.query(
                'select p.id as id, p.name as name, p.lastname as lastname, c.name as nationality, p.photo as photo\n' +
                'from directors as p, teams as t, teams_directors tp, countries as c\n' +
                'where p.id = tp.idDirector and tp.idTeam = t.id and p.idCountry = c.id and t.id = :idTeam;',
                {
                    replacements: { idTeam: id_team }
                }
            );
            return sendResponse(res, 200, "Tecnicos suscritos a x equipos: ", results);
        } catch (error) {
            console.log(error);
            return sendResponse(res, 400, "Error ejecutar la consulta", []);
        }
    }
}
/*
    Jugadores o Técnicos mayores a X años
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte2 = async (req, res) => { // Jugadores o Técnicos mayores a X años
    const { player, age} = req.query;

    try {
        let query = 'SELECT u.id as id, u.name as name, u.lastname as lastname, c.name as nationality, u.photo, t.name as team ,(2022 - YEAR(u.birthdate)) as age,';

        if (player == 1) {
            query += ` '' as position
                        FROM directors as u
                        JOIN teams_directors td on u.id = td.idDirector`;
        } else {
            query += ` u.position as position
                        FROM players as u
                        JOIN teams_players td on u.id = td.idPlayer`;
        }

        query += ` JOIN teams t on td.idTeam = t.id
                    JOIN countries c on c.id = u.idCountry
                    WHERE (2022 - YEAR(u.birthdate)) >= ${age};`;
        const [results] = await sequelize.query(query);

        return sendResponse(res, 200, "Jugadores o técnicos mayores a x años obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener los jugadores o técnicos mayores a x años.", []);
    }
}

/*
    Jugadores o Técnicos menores a X años
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte3 = async (req, res) => { // Jugadores o Técnicos menores a X años
    const { player, age} = req.query;

    try {
        let query = 'SELECT u.id as id, u.name as name, u.lastname as lastname, c.name as nationality, u.photo, t.name as team ,(2022 - YEAR(u.birthdate)) as age,';

        if (player == 1) {
            query += ` '' as position
                        FROM directors as u
                        JOIN teams_directors td on u.id = td.idDirector`;
        } else {
            query += ` u.position as position
                        FROM players as u
                        JOIN teams_players td on u.id = td.idPlayer`;
        }

        query += ` JOIN teams t on td.idTeam = t.id
                    JOIN countries c on c.id = u.idCountry
                    WHERE (2022 - YEAR(u.birthdate)) <= ${age};`;
        const [results] = await sequelize.query(query);

        return sendResponse(res, 200, "Jugadores o técnicos menores a x años obtenidos con éxito.", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener los jugadores o técnicos menores a x años.", []);
    }
}

/*
    Equipos que participaron en X competición
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte4 = async (req, res) => {
    let {id_competition} = req.query;
    //Son Jugadores
        try {
            const [results, metadata] = await sequelize.query(
                'select t.id as id_team, t.name as team, t.photo as photo, c.id as id\n' +
                'from teams as t , competitions as c\n' +
                'where c.championTeam = t.id and c.id = :idCompetition;',
                {
                    replacements: { idCompetition: id_competition }
                }
            );
            return sendResponse(res, 200, "equipos que participaron en X competición: ", results);
        } catch (error) {
            console.log(error);
            return sendResponse(res, 400, "Error ejecutar la consulta", []);
        }
}
/*
    Equipos de X país
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte5 = async (req, res) => {
    let {id_country} = req.query;
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
            'select t.id as id_team, t.name as team, t.photo as photo, c.id as id_country\n' +
            'from teams as t , countries as c\n' +
            'where t.idCountry = c.id and c.id = :idCountry;',
            {
                replacements: { idCountry: id_country }
            }
        );
        return sendResponse(res, 200, "Equipos de X país: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}

/*
    Equipos con X años de antigüedad
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte6 = async (req, res) => {
    let {age} = req.query;
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT tmp.id_team, tmp.team, tmp.photo, date_format(tmp.foundation_date, "%Y-%m-%d") as foundation_date, tmp.country
                    FROM (select  t.id as id_team, t.name as team, t.photo as photo, t.foundation_date as foundation_date, (2022 - YEAR(t.foundation_date)) as antiguedad, c.name as country
                    FROM teams as t , countries as c
                    WHERE t.idCountry = c.id) as tmp
                    WHERE tmp.antiguedad >= ${age}`
        );
        return sendResponse(res, 200, "Equipos con x años de antigüedad obtenidos con éxito: ", results);
    } catch (error) {
        return sendResponse(res, 400, "Error al obtener los equipos con x años de antigüedad.", []);
    }
}


/*
    Estadios en X país
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte7 = async (req, res) => {
    let {id_country} = req.query;
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
            'select   t.id as id_stadium, t.name as stadium, t.photo as photo, c.id as id_country\n' +
            'from countries as c, stadiums as t\n' +
            'where t.idCountry = c.id and c.id = :id_country;',
            {
                replacements: { id_country: id_country }
            }
        );
        return sendResponse(res, 200, "Estadios en X país: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
    Estadios con capacidad menor o igual a X
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte8 = async (req, res) => {
    let {capacity} = req.query;
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
        `SELECT t.id as id_stadium, t.name as stadium, t.photo as photo, c.name as country, t.capacity
                FROM countries as c, stadiums as t
                WHERE t.idCountry = c.id and t.capacity <= ${capacity}`
        );
        return sendResponse(res, 200, "EEstadios con capacidad menor o igual a x obtenidos con éxito.", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error al obtener los estadios con capacidad menor o igual a x.", []);
    }
}
/*
    Histórico de partidos de X equipo
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte9 = async (req, res) => {
    let {id_team} = req.query;
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
            'select sc.id , sc.game_date, sc.attendees, sc.result_local, sc.result_visiting, sc.state as status, sc.idStadium, st.name as stadium, \n' +
            'sc.idTeamLocal as id_team_local, sc.idTeamVisiting as id_team_visiting, sc.idCompetition as id_competition, c.name as competition,\n' +
            'sc.idTeamLocal as team_local, sc.idTeamVisiting as team_visiting, t.photo as photo_local,  t.photo as photo_visiting\n' +
            'from soccer_games sc, teams as t , stadiums as st, competitions as c\n' +
            'where c.id = sc.idCompetition and st.id = sc.idStadium and sc.idTeamVisiting = t.id and ( sc.idTeamVisiting = :id_team or sc.idTeamLocal = :id_team);',
            {
                replacements: { id_team: id_team }
            }
        );
        return sendResponse(res, 200, " Histórico de partidos de X equipo: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
   Partidos donde hubo al menos X goles
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte11 = async (req, res) => {
    let {goals} = req.query;
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
            `select *
                    from (
                        select sc.id,
                               sc.game_date,
                               sc.attendees,
                               sc.result_local,
                               sc.result_visiting,
                               sc.state as status,
                               sc.idStadium as id_stadium,
                               st.name as stadium,
                               sc.idTeamLocal as id_team_local,
                               t1.name as team_local,
                               t1.photo as photo_local,
                               sc.idTeamVisiting as id_team_visiting,
                               t2.name as team_visiting,
                               t2.photo as photo_visiting,
                               sc.idCompetition as id_competition,
                               c.name as competition,
                               sum(sc.result_local + sc.result_visiting) as goles
                    from soccer_games sc, teams as t1 , teams t2, stadiums as st, competitions as c
                    where c.id = sc.idCompetition
                      and st.id = sc.idStadium
                      and sc.idTeamVisiting = t1.id
                      and sc.idTeamLocal = t2.id
                    group by sc.id ) as t
                    where t.goles >= ${goals}`
        );
        return sendResponse(res, 200, " Partidos donde hubo x cantidad de goles obtenidos con éxito.", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error al obtener los partidos donde hubo x cantidad de goles", []);
    }
}
/*
   Jugadores con más X incidencias en Y competición
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte12 = async (req, res) => {
    //Son Jugadores
    try {
        const [results, metadata] = await sequelize.query(
            'select p.id , p.name,p.lastname,c.name as nationality, p.photo, p.position, count(*) as total\n' +
            'from players as p, incidencias as inc, soccer_games sc, countries as c , competitions as co\n' +
            'where inc.id_player = p.id and inc.id_game =sc.id and p.idCountry = c.id and co.id = sc.idCompetition\n' +
            'group by inc.id_player ;',
            {
                //replacements: { goals: goals }
            }
        );
        return sendResponse(res, 200, " Jugadores con más X incidencias en Y competición: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
   Jugadores con más X incidencias y Y competiciones de Z año
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte13 = async (req, res) => {
    let {goals} = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            'select * from(\n' +
            'select p.id , p.name,p.lastname,c.name as nationality, p.photo, p.position, count(*) as count, co.id as idCompetition, YEAR(sc.game_date) as anio\n' +
            'from players as p, incidencias as inc, soccer_games sc, countries as c , competitions as co\n' +
            'where inc.id_player = p.id and inc.id_game =sc.id and p.idCountry = c.id and co.id = sc.idCompetition\n' +
            'group by inc.id_player \n' +
            ') as tmp;',
            {
                //replacements: { goals: goals }
            }
        );
        return sendResponse(res, 200, " Jugadores con más X incidencias y Y competiciones de Z año: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
   Cantidad de X competiciones que ha ganado Y equipo
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte14 = async (req, res) => {
    let {id_team} = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            '#Cantidad de X competiciones que ha ganado Y equipo\n' +
            'select c.type, c.championTeam as id_team, t.photo, count(*) as count\n' +
            'from competitions as c, teams as t\n' +
            'where c.championTeam = t.id and t.id = :id_team\n' +
            'group by c.championTeam;',
            {
                replacements: { id_team: id_team }
            }
        );
        return sendResponse(res, 200, " Cantidad de X competiciones que ha ganado Y equipo: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
   Listado de partidos en X año
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte15 = async (req, res) => {
    let {year} = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            'select * from(\n' +
            'select sc.id , sc.game_date, sc.attendees, sc.result_local, sc.result_visiting, sc.state as status, sc.idStadium, st.name as stadium, \n' +
            'sc.idTeamLocal as id_team_local, sc.idTeamVisiting as id_team_visiting, sc.idCompetition as id_competition, c.name as competition,\n' +
            'sc.idTeamLocal as team_local, sc.idTeamVisiting as team_visiting, t.photo as photo_local,  t.photo as photo_visiting, YEAR(sc.game_date) as anio\n' +
            'from soccer_games sc, teams as t , stadiums as st, competitions as c\n' +
            'where c.id = sc.idCompetition and st.id = sc.idStadium and sc.idTeamVisiting = t.id\n' +
            ') as tmp\n' +
            'where tmp.anio =:year;',
            {
                replacements: { year: year }
            }
        );
        return sendResponse(res, 200, " Listado de partidos en X año: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
   Listado de partidos entre X equipo contra Y equipo
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte16 = async (req, res) => {
    let {id_team, id_opposing_team} = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            'select sc.id , sc.game_date, sc.attendees, sc.result_local, sc.result_visiting, sc.state as status, sc.idStadium, st.name as stadium, \n' +
            'sc.idTeamLocal as id_team_local, sc.idTeamVisiting as id_team_visiting, sc.idCompetition as id_competition, c.name as competition,\n' +
            'sc.idTeamLocal as team_local, sc.idTeamVisiting as team_visiting, t.photo as photo_local,  t.photo as photo_visiting\n' +
            'from soccer_games sc, teams as t , stadiums as st, competitions as c\n' +
            'where c.id = sc.idCompetition and st.id = sc.idStadium and sc.idTeamVisiting = t.id and ( sc.idTeamVisiting = :id_opposing_team or sc.idTeamLocal = :id_team);',
            {
                replacements: { id_opposing_team: id_opposing_team,  id_team: id_team}
            }
        );
        return sendResponse(res, 200, " Listado de partidos entre X equipo contra Y equipo: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
/*
   Listado de partidos entre X equipo contra Y equipo
    RUTA: http://localhost:5000/report/2/?age=18&player=0
 */
const getReporte17 = async (req, res) => {
    let {id_team} = req.query;
    try {
        const [results, metadata] = await sequelize.query(
            'select sc.id , sc.game_date, sc.attendees, sc.result_local, sc.result_visiting, sc.state as status, sc.idStadium, st.name as stadium, \n' +
            'sc.idTeamLocal as id_team_local, sc.idTeamVisiting as id_team_visiting, sc.idCompetition as id_competition, c.name as competition,\n' +
            'sc.idTeamLocal as team_local, sc.idTeamVisiting as team_visiting, t.photo as photo_local,  t.photo as photo_visiting\n' +
            'from soccer_games sc, teams as t , stadiums as st, competitions as c\n' +
            'where c.id = sc.idCompetition and st.id = sc.idStadium and sc.idTeamVisiting = t.id and ( sc.idTeamVisiting = :id_team or sc.idTeamLocal = :id_team);',
            {
                replacements: { id_team: id_team}
            }
        );
        return sendResponse(res, 200, " Listado de partidos entre X equipo contra Y equipo: ", results);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 400, "Error ejecutar la consulta", []);
    }
}
module.exports = {
    initReportes,
    getReporte1,
    getReporte2,
    getReporte3,
    getReporte4,
    getReporte5,
    getReporte6,
    getReporte7,
    getReporte8,
    getReporte9,
    getReporte11,
    getReporte12,
    getReporte13,
    getReporte14,
    getReporte15,
    getReporte16,
    getReporte17
}