const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');
const controllerEquipo = require('../controllers/equipos');

router.post(
  '/',
  validarJWT,
  [
    check('name', 'El nombre del estadio es obligatorio').not().isEmpty(),
    check('fundation_date', 'La fecha de fundación del estadio es obligatoria'),
    check('id_country', 'El id del país del estadio es obligatorio').not().isEmpty(),
    check('photo', 'La foto del estadio es obligatoria').not().isEmpty(),
    checkBody
  ],
  controllerEquipo.postTeam
)

router.get(
  '/',
  validarJWT,
  controllerEquipo.getTeam
)

router.put(
  '/',
  validarJWT,
  validarEmpleado,
  [
    check('id', 'El id del estadio es obligatorio').not().isEmpty(),
    check('name', 'El nombre del estadio es obligatorio').not().isEmpty(),
    check('fundation_date', 'La fecha de fundación del estadio es obligatoria'),
    check('id_country', 'El id del país del estadio es obligatorio').not().isEmpty(),
    check('photo', 'La foto del estadio es obligatoria').not().isEmpty(),
    checkBody
  ],
  controllerEquipo.updateTeam
)

router.delete(
  '/:id',
  validarJWT,
  validarEmpleado,
  controllerEquipo.deleteTeam
)

module.exports = router;
