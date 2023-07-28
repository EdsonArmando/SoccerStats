const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');
const controllerAcciones = require('../controllers/acciones');

router.post(
  '/transfer-player',
  validarJWT,
  validarEmpleado,
  [
    check('id_player', 'El id del jugador es obligatorio').not().isEmpty(),
    check('id_team_origin', 'El id del equipo actual es obligatorio').not().isEmpty(),
    check('id_team_destination', 'El id del equipo destino es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerAcciones.transferPlayer
)

router.get(
  '/transfer-log',
  validarJWT,
  validarEmpleado,
  controllerAcciones.tranferLog
)

router.get(
  '/get-incidence',
  validarJWT,
  validarEmpleado,
  controllerAcciones.getIncidence
)

router.post(
  '/transfer-coach',
  validarJWT,
  validarEmpleado,
  [
    check('id_coach', 'El id del coach es obligatorio').not().isEmpty(),
    check('id_team_origin', 'El id del equipo actual es obligatorio').not().isEmpty(),
    check('id_team_destination', 'El id del equipo destino es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerAcciones.transferCoach
)

router.get(
  '/transfer-log-coach',
  validarJWT,
  validarEmpleado,
  controllerAcciones.tranferLog
)



router.post(
  '/add-incidence',
  validarJWT,
  validarEmpleado,
  [
    check('id_game', 'El id del partido es obligatorio').not().isEmpty(),
    check('id_player', 'El id del jugador es obligatorio').not().isEmpty(),
    check('id_team', 'El id del equipo es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('minuto', 'El minuto de la incidencia es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerAcciones.addIncidence
)

router.put(
  '/update-person',
  validarJWT,
  validarEmpleado,
  [
    check('id_person', 'El id de la persona es obligatorio').not().isEmpty(),
    check('state', 'El estado de la persona es obligatorio').not().isEmpty(),
    check('rol', 'El rol de la persona es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerAcciones.updatePerson
)


module.exports = router;