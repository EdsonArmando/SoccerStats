const { Router } = require('express');
const controllers = require('../controllers/noticias.js')
const router = Router();

const { validarJWT } = require('../middleware/jwt');
const { validarEmpleado } = require('../middleware/validar-rol');

router.get(
  '/',
  validarJWT,
  validarEmpleado,
  controllers.getNoticias)



router.post(
      '/',
     validarJWT,
     validarEmpleado,
     controllers.noticetea)

module.exports = router;