const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();

const controllerAdministrator = require('../controllers/administrator.controller');

router.get(
    '/report/1/',
    controllerAdministrator.usuarioSuscrito,
)

router.get(
    '/report/2/',
    controllerAdministrator.membresiaUsuario,
)

router.get(
    '/report/3/',
    controllerAdministrator.masMembresias,
)

router.get(
    '/report/4/',
    controllerAdministrator.dineroGastado,
)

router.get(
    '/report/5/',
    controllerAdministrator.usuariosPais,
)

router.get(
    '/report/6/',
    controllerAdministrator.usuariosGenero,
)

router.get(
    '/report/7/',
    controllerAdministrator.edadUsuarios,
)

router.get(
    '/report/8/',
    controllerAdministrator.noticiasEmpleado,
)

router.get(
    '/report/9/',
    controllerAdministrator.noticiasEmpleadoEquipo,
)

router.get(
    '/report/10/',
    controllerAdministrator.bitacora,
)

module.exports = router
