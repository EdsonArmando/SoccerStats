const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();

const controllerAuth = require('../controllers/auth.controller');

router.post(
    '/',
    controllerAuth.login,
)

router.get(
    '/',
    controllerAuth.validarCuenta,
)

router.post(
    '/temporal-password',
    controllerAuth.contraseniaTemporal,
)

router.post(
    '/reset-password',
    controllerAuth.reestablecerContrasenia,
)

module.exports = router
