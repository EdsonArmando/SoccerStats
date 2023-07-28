const { Router } = require('express');
const controllers = require('../controllers/reportes')
const checkAuth = require('../middleware/check-auth')
const router = Router();

// Jugadores o Técnicos mayores a X años
router.get('/report/2/', checkAuth, controllers.getReporte2)

// Jugadores o Técnicos menores a X años
router.get('/report/3/', checkAuth, controllers.getReporte3)

// Equipos con X años de antigüedad
router.get('/report/6/', checkAuth, controllers.getReporte6)

// Estadios con capacidad menor o igual a X
router.get('/report/8/',checkAuth, controllers.getReporte8)

// Partidos donde hubo al menos X goles
router.get('/report/11/',checkAuth, controllers.getReporte11)

router.get('/', controllers.initReportes)
router.get('/report/1/', controllers.getReporte1)
router.get('/report/4/', controllers.getReporte4)
router.get('/report/5/', controllers.getReporte5)
router.get('/report/7/', controllers.getReporte7)
router.get('/report/9/', controllers.getReporte9)
router.get('/report/12/', controllers.getReporte12)
router.get('/report/13/', controllers.getReporte13)
router.get('/report/14/', controllers.getReporte14)
router.get('/report/15/', controllers.getReporte15)
router.get('/report/16/', controllers.getReporte16)
router.get('/report/17/', controllers.getReporte17)
module.exports = router;