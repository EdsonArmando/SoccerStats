const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { checkBody } = require('../middleware/check-body');
const { validarJWT } = require('../middleware/jwt');
const { validarEmpleadoAdmin } = require('../middleware/validar-rol');
const controllerPersona = require('../controllers/persona');

router.post(
  '/create',
  validarJWT, validarEmpleadoAdmin,
  [
    check('name', 'El nombre de la persona es obligatorio').not().isEmpty(),
    check('lastname', 'El apellido de la persona es obligatorio').not().isEmpty(),
    check('birthday', 'El nacimiento de la persona es obligatorio').not().isEmpty(),
    check('nationality', 'La nacionalidad de la persona es obligatoria').not().isEmpty(),
    check('status', 'El estado de la persona es obligatorio').not().isEmpty(),
    check('rol', 'El rol de la persona es obligatorio').not().isEmpty(),
    check('id_team', 'El equipo de la persona es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerPersona.postPersona
)

router.post(
    '/create-staff',
    validarJWT, validarEmpleadoAdmin,
    [
        check('first_name', 'El nombre de la persona es obligatorio').not().isEmpty(),
        check('last_name', 'El apellido de la persona es obligatorio').not().isEmpty(),
        check('birth_date', 'El nacimiento de la persona es obligatorio').not().isEmpty(),
        check('email', 'El correo de la persona es obligatorio').not().isEmpty(),
        check('rol', 'El rol de la persona es obligatorio').not().isEmpty(),
        checkBody
    ],
    controllerPersona.createStaff
)

router.put(
  '/update',
  validarJWT, validarEmpleadoAdmin,
  [
    check('id_person', 'El id de la persona es obligatorio').not().isEmpty(),
    check('name', 'El nombre de la persona es obligatorio').not().isEmpty(),
    check('lastname', 'El apellido de la persona es obligatorio').not().isEmpty(),
    check('birthday', 'El nacimiento de la persona es obligatorio').not().isEmpty(),
    check('nationality', 'La nacionalidad de la persona es obligatoria').not().isEmpty(),
    check('status', 'El estado de la persona es obligatorio').not().isEmpty(),
    check('rol', 'El rol de la persona es obligatorio').not().isEmpty(),
    check('id_team', 'El equipo de la persona es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerPersona.updatePersona
)

router.post(
  '/read',
  validarJWT, validarEmpleadoAdmin,
  [
    check('id_person', 'El id de la persona es obligatorio').not().isEmpty(),
    check('rol', 'El rol de la persona es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerPersona.getPersona
)

router.post(
  '/delete',
  validarJWT, validarEmpleadoAdmin,
  [
    check('id_person', 'El id de la persona es obligatorio').not().isEmpty(),
    check('rol', 'El rol de la persona es obligatorio').not().isEmpty(),
    checkBody
  ],
  controllerPersona.deletePersona
)

module.exports = router;