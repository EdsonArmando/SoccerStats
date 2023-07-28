const { Router } = require('express');
const controllers = require('../controllers/usuario')
const checkAuth=require('../middleware/check-auth')
const router = Router();

router.post('/login', controllers.login)
router.get('/', controllers.verifyEmail)
router.post('/client/create', controllers.createClient);
router.put('/client/update', checkAuth, controllers.updateClient);
router.put('/client/delete', checkAuth, controllers.deleteClient);
router.get('/client/:id', checkAuth, controllers.getClient);
router.get('/countries',controllers.countri);
router.post('/getId', controllers.getidEmail);
//router.get('/client/countries', controllers.getCountries);
router.post('/client/quiniela', checkAuth, controllers.joinQuiniela);

module.exports = router;