"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.prediction = void 0;
var Sequelize = require('sequelize').Sequelize;
var sequelize = new Sequelize('soccerstats', 'admin', 'softwareavanzado', {
    host: 'soccerstats.clhldirk17aw.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
});
var set_response_1 = require("./set-response");
var result = [];
var prediction = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, team_home, team_visitor, id_competition, _b, soccer_games, metadata, historial, totalHomeGoals, totalVisitorsGoals, countGamesPlayed, averageHomeGoals, averageVisitorsGoals, teamHome, teamVisitor, totalScoredHome, totalConcededHome, totalHomeGames, totalScoredVisitors, totalConcededVisitors, totalVisitorsGames, localAttackForce, localDefenseForce, visitorsAttackForce, visitorsDefenseForce, expectedHomeGoals, expectedVisitorsGoals, i, home_team_result, visitor_team_result, estimateGoalsHome, estimateGoalsVisitors;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, team_home = _a.team_home, team_visitor = _a.team_visitor, id_competition = _a.id_competition;
                return [4 /*yield*/, sequelize.query("SELECT \n            sg.idTeamLocal as team_home, \n            sg.idTeamVisiting as team_visitor, \n            sg.result_local as goal_home,\n            sg.result_visiting as goal_visitor\n         FROM soccer_games AS sg\n         WHERE idCompetition = ".concat(id_competition, "\n         AND (sg.idTeamLocal IN (").concat(team_home, ", ").concat(team_visitor, ") OR sg.idTeamVisiting IN (").concat(team_home, ", ").concat(team_visitor, "))"))];
            case 1:
                _b = _c.sent(), soccer_games = _b[0], metadata = _b[1];
                historial = soccer_games;
                totalHomeGoals = historial.map(function (item) { return item.goal_home; }).reduce(function (previous, current) { return previous + current; }, 0);
                totalVisitorsGoals = historial.map(function (item) { return item.goal_visitor; }).reduce(function (previous, current) { return previous + current; }, 0);
                countGamesPlayed = historial.length;
                averageHomeGoals = totalHomeGoals / countGamesPlayed;
                averageVisitorsGoals = totalVisitorsGoals / countGamesPlayed;
                teamHome = historial.filter(function (value) { return value.team_home == team_home; });
                teamVisitor = historial.filter(function (value) { return value.team_visitor == team_visitor; });
                if (teamHome.length == 0 || teamVisitor.length == 0) {
                    return [2 /*return*/, (0, set_response_1.setResponse)(res, {
                            status: 200,
                            msg: "Alguno de los equipos no tiene un juego registrado. Es imposible calcular una probabilidad",
                            data: []
                        })];
                }
                totalScoredHome = teamHome.map(function (item) { return item.goal_home; }).reduce(function (previous, current, team) { return previous + current; }, 0);
                totalConcededHome = teamHome.map(function (item) { return item.goal_visitor; }).reduce(function (previous, current, team) { return previous + current; }, 0);
                totalHomeGames = teamHome.length;
                totalScoredVisitors = teamVisitor.map(function (item) { return item.goal_visitor; }).reduce(function (previous, current, team) { return previous + current; }, 0);
                totalConcededVisitors = teamVisitor.map(function (item) { return item.goal_home; }).reduce(function (previous, current, team) { return previous + current; }, 0);
                totalVisitorsGames = teamVisitor.length;
                localAttackForce = (totalScoredHome / totalHomeGames) / averageHomeGoals;
                localDefenseForce = (totalConcededHome / totalHomeGames) / averageHomeGoals;
                visitorsAttackForce = (totalScoredVisitors / totalVisitorsGames) / averageVisitorsGoals;
                visitorsDefenseForce = (totalConcededVisitors / totalVisitorsGames) / averageVisitorsGoals;
                expectedHomeGoals = localAttackForce * visitorsDefenseForce * averageHomeGoals;
                expectedVisitorsGoals = visitorsAttackForce * localDefenseForce * averageVisitorsGoals;
                for (i = 0; i < 5; i++) {
                    home_team_result = calculatePoisson(expectedHomeGoals, expectedHomeGoals, i);
                    visitor_team_result = calculatePoisson(expectedVisitorsGoals, expectedVisitorsGoals, i);
                    result[i] = { home_team_result: home_team_result, visitor_team_result: visitor_team_result };
                }
                estimateGoalsHome = returnMax(result.map(function (item) { return item.home_team_result; }));
                estimateGoalsVisitors = returnMax(result.map(function (item) { return item.visitor_team_result; }));
                return [2 /*return*/, (0, set_response_1.setResponse)(res, {
                        status: 200,
                        msg: "Predicci\u00F3n de resultado del partido entre los equipos: ".concat(team_home, " - ").concat(team_visitor),
                        data: { estimateGoalsHome: estimateGoalsHome, estimateGoalsVisitors: estimateGoalsVisitors }
                    })];
        }
    });
}); };
exports.prediction = prediction;
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
function calculatePoisson(lambda, k, index) {
    var f = factorial(index);
    return ((Math.pow(2.71828, -lambda) * Math.pow(k, index)) / f) * 100;
}
function returnMax(array) {
    return array.indexOf(Math.max.apply(Math, array));
}
