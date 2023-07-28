const { Router } = require('express');
const router = Router();

const controllerPais = require('../controllers/ciudades');

router.get(
  '/',
  controllerPais.getCountry
)

module.exports = router;