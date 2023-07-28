const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');
const controllerCompetencia = require('../controllers/competencias');

router.post(
  '/',
  validarJWT,
  [
    check('name', 'El nombre de la competencia es obligatorio').not().isEmpty(),
    check('type', 'El type de la competencia es obligatorio').not().isEmpty(),
    check('year', 'El año de la competencia es obligatorio').not().isEmpty(),
    check('country', 'El país de la competencia es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerCompetencia.postCompetition
)

router.get(
  '/',
  validarJWT,
  controllerCompetencia.getCompetition
)

router.put(
  '/',
  validarJWT,
  [
    check('id_competition', 'El id de la competencia es obligatorio').not().isEmpty(),
    check('name', 'El nombre de la competencia es obligatorio').not().isEmpty(),
    check('type', 'El type de la competencia es obligatorio').not().isEmpty(),
    check('year', 'El año de la competencia es obligatorio').not().isEmpty(),
    check('country', 'El país de la competencia es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerCompetencia.updateCompetition
)

router.delete(
  '/:id',
  validarJWT,
  controllerCompetencia.deleteCompetition
)

module.exports = router;