const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('soccerstats', 'admin', 'softwareavanzado', {
    host: 'soccerstats.clhldirk17aw.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})
import { Request, Response } from "express";
import { setResponse } from "./set-response";
import { Games, Result} from "./models";

var result: Result[] = [];

export const prediction = async (req: Request, res: Response) => {

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

    let historial: Games[] = soccer_games as Games[];

    var totalHomeGoals = historial.map(item => item.goal_home).reduce((previous, current) => previous + current, 0);
    var totalVisitorsGoals = historial.map(item => item.goal_visitor).reduce((previous, current) => previous + current, 0);
    var countGamesPlayed = historial.length;

    var averageHomeGoals = totalHomeGoals / countGamesPlayed;
    var averageVisitorsGoals = totalVisitorsGoals / countGamesPlayed;

    var teamHome : Games[] = historial.filter((value) => value.team_home == team_home);
    var teamVisitor : Games[] = historial.filter((value) => value.team_visitor == team_visitor);

    if (teamHome.length == 0 || teamVisitor.length == 0) {
        return setResponse(res, {
            status: 200,
            msg: `Alguno de los equipos no tiene un juego registrado. Es imposible calcular una probabilidad`,
            data: [],
        });
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

    return setResponse(res, {
        status: 200,
        msg: `Predicción de resultado del partido entre los equipos: ${ team_home } - ${ team_visitor }`,
        data: { estimateGoalsHome, estimateGoalsVisitors },
    });
};

function factorial(n : number): number
{
    if (n == 0){
        return 1;
    }
    return n * factorial(n-1);
}

function calculatePoisson(lambda:number, k:number, index:number) : number
{
    let f = factorial(index);
    return ((Math.pow(2.71828, -lambda) * Math.pow(k, index)) / f )  * 100;
}

function returnMax(array: number[]) : number
{
    return array.indexOf(Math.max(...array));
}