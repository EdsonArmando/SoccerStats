const { Router } = require('express');
// eslint-disable-next-line new-cap
const router = Router();

const controllerCustomer = require('../controllers/customer.controller');

router.delete(
    '/',
    controllerCustomer.darseDeBaja,
)

router.get(
    '/',
    controllerCustomer.visualizarPerfil,
)

router.post(
    '/membership',
    controllerCustomer.comprarMembresia,
)

router.put(
    '/membership',
    controllerCustomer.bajaMembresia,
)

router.get(
    '/follow',
    controllerCustomer.equiposFavoritos,
)

router.get(
    '/report/2/',
    controllerCustomer.personasMayores,
)

router.get(
    '/report/3/',
    controllerCustomer.personasMenores,
)

router.get(
    '/report/6/',
    controllerCustomer.equiposAntiguos,
)

router.get(
    '/report/8/',
    controllerCustomer.estadiosCapacidad,
)

router.get(
    '/report/11/',
    controllerCustomer.partidosGoles,
)

module.exports = router
