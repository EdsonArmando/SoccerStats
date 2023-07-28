const { Router } = require('express');
const controllers = require('../controllers/reportes.js')
const router = Router();

const { validarJWT } = require('../middleware/jwt');
const { validarAdministrador } = require('../middleware/validar-rol');

router.get('/report/1/', validarJWT, controllers.getReporte1);
router.get('/report/2/', validarJWT, controllers.getReporte2);
router.get('/report/3/', validarJWT, controllers.getReporte3);
router.get('/report/4/', validarJWT, controllers.getReporte4);
router.get('/report/5/', validarJWT, controllers.getReporte5);
router.get('/report/6/', validarJWT, controllers.getReporte6);
router.get('/report/7/', validarJWT, controllers.getReporte7);
router.get('/report/8/', validarJWT, controllers.getReporte8);
router.get('/report/9/', validarJWT, controllers.getReporte9);
router.get('/report/10/',validarJWT, controllers.getReporte10);

module.exports = router;