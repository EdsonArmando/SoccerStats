const { Req, Res } = require ('express');

const validarEmpleado = (req = Req, res = Res, next) => {

  if (!req.data) {
      return res.status(500).json({
          msg: 'No se tiene la información del usuario, verifica el token'
      });
  }

  const { id_rol } = req.data;
  if ( id_rol !== '2' && id_rol !== '1' && id_rol !== '3' ) {
      return res.status(401).json({
          msg: `El usuario no es un empleado y no puede realizar la petición`
      });
  }

  next();
}

module.exports = {
  validarEmpleado
}

