const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');
const controllerQuiniela = require('../controllers/quiniela');

router.post(
  '/',
  validarJWT,
  validarEmpleado,
  [
    check('name', 'El nombre de la quiniela es obligatorio').not().isEmpty(),
    check('date', 'La fecha de la quiniela es obligatoria').not().isEmpty(),
    check('status', 'El estado de la quiniela es obligatorio').not().isEmpty(),
    check('idTeam1', 'El id del equipo1 es obligatorio').not().isEmpty(),
    check('idTeam2', 'El id del equipo2 es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerQuiniela.createQuiniela
)

router.get(
  '/',
  validarJWT,
  validarEmpleado,
  controllerQuiniela.getQuiniela
)

router.put(
  '/',
  validarJWT,
  validarEmpleado,
  [
    check('id', 'El id de la quiniela es obligatorio').not().isEmpty(),
    check('status', 'El estado de la quiniela es obligatorio').not().isEmpty(),
    check('scoreTeam1', 'El punteo del equipo1 es obligatorio').not().isEmpty(),
    check('scoreTeam2', 'El punteo del equipo2 es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerQuiniela.updateQuiniela
)

module.exports = router;