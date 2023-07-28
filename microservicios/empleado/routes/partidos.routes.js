const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');
const controllerSoccerGame = require('../controllers/partidos');

router.post(
  '/',
  validarJWT,
  [
    check('game_date', 'La fecha del partido es obligatoria').not().isEmpty(),
    check('attendees', 'Los asistentes del partido es obligatorio').not().isEmpty(),
    check('result_local', 'Los goles del local del partido es obligatorio').not().isEmpty(),
    check('result_visiting', 'Los goles del visitante del partido es obligatorio').not().isEmpty(),
    check('state', 'El estado del partido es obligatorio').not().isEmpty(),
    check('id_stadium', 'El estadio del partido es obligatorio').not().isEmpty(),
    check('id_team_local', 'El id del equipo local del partido es obligatorio').not().isEmpty(),
    check('id_team_visiting', 'El id del equipo visitante del partido es obligatorio').not().isEmpty(),
    check('id_competition', 'La competencia del partido es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerSoccerGame.postSoccerGame
)

router.get(
  '/',
  validarJWT,
  controllerSoccerGame.getSoccerGame
)

router.put(
  '/',
  validarJWT,
  validarEmpleado,
  [
    check('id_game', 'El id del partido es obligatorio').not().isEmpty(),
    check('game_date', 'La fecha del partido es obligatoria').not().isEmpty(),
    check('attendees', 'Los asistentes del partido es obligatorio').not().isEmpty(),
    check('result_local', 'Los goles del local del partido es obligatorio').not().isEmpty(),
    check('result_visiting', 'Los goles del visitante del partido es obligatorio').not().isEmpty(),
    check('state', 'El estado del partido es obligatorio').not().isEmpty(),
    check('id_stadium', 'El estadio del partido es obligatorio').not().isEmpty(),
    check('id_team_local', 'El id del equipo local del partido es obligatorio').not().isEmpty(),
    check('id_team_visiting', 'El id del equipo visitante del partido es obligatorio').not().isEmpty(),
    check('id_competition', 'La competencia del partido es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerSoccerGame.updateSoccerGame
)

router.delete(
  '/:id',
  validarJWT,
  validarEmpleado,
  controllerSoccerGame.deleteSoccerGame
)

module.exports = router;