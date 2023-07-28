const { Router } = require('express');
const controllers = require('../controllers/client')
const checkAuth=require('../middleware/check-auth')
const router = Router();

// Darse de baja
router.delete('/', checkAuth, controllers.deleteClient);
// Visualizar Perfil
router.get('/', checkAuth, controllers.getClient)
// Comprar membresia
router.post('/membership', checkAuth, controllers.membership);
// Dar de baja Membresia
router.put('/membership',checkAuth, controllers.removeMembership);
// Obtener equipos favoritos de un usuario
router.post('/teamfav', checkAuth, controllers.getFavoriteTeams);

router.get('/partidos', controllers.getPartidos)
router.post('/send-reset-email', controllers.sendResetEmail);
router.post('/reset', controllers.resetPassword);
router.post('/follow', controllers.follow);
router.post('/equipos', controllers.getTeams)

router.get('/my-favorite-notices/:id',checkAuth,controllers.myNotices)
router.post('/prediction/', checkAuth, controllers.prediction)
/*
router.get('/notifications', controllers.notification)
router.post('/quiniela', controllers.quiniela) */

module.exports = router;