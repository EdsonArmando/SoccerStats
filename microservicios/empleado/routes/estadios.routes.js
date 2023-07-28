const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');
const controllerEstadio = require('../controllers/estadios');

router.post(
  '/',
  validarJWT,
  validarEmpleado,
  [
    check('name', 'El nombre del estadio es obligatorio').not().isEmpty(),
    check('fundation_date', 'La fecha de fundación del estadio es obligatoria').not().isEmpty(),
    check('capacity', 'La capacidad del estadio es obligatoria').not().isEmpty(),
    check('id_country', 'El id del país del estadio es obligatorio').not().isEmpty(),
    check('address', 'La dirección del estadio es obligatoria').not().isEmpty(),
    check('state', 'El estado del estadio es obligatorio').not().isEmpty(),
    check('photo', 'La foto del estadio es obligatoria').not().isEmpty(),
    checkBody
  ],
  controllerEstadio.postStadium
)

router.get(
  '/',
  validarJWT,
  validarEmpleado,
  controllerEstadio.getStadium
)

router.put(
  '/',
  validarJWT,
  validarEmpleado,
  [
    check('id', 'El id del estadio es obligatorio').not().isEmpty(),
    check('name', 'El nombre del estadio es obligatorio').not().isEmpty(),
    check('fundation_date', 'La fecha de fundación del estadio es obligatoria').not().isEmpty(),
    check('capacity', 'La capacidad del estadio es obligatoria').not().isEmpty(),
    check('id_country', 'El id del país del estadio es obligatorio').not().isEmpty(),
    check('address', 'La dirección del estadio es obligatoria').not().isEmpty(),
    check('state', 'El estado del estadio es obligatorio').not().isEmpty(),
    check('photo', 'La foto del estadio es obligatoria').not().isEmpty(),
    checkBody
  ],
  controllerEstadio.updateStadium
)

router.delete(
  '/:id',
  validarJWT,
  validarEmpleado,
  controllerEstadio.deleteStadium
)

module.exports = router;
