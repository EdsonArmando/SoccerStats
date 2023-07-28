const { sendResponse } = require('../tools/sendResponse');
const { request } = require('../tools/request');

const login = async (req, res) => {
  try {
    const logPrefix = 'AUTH - login: '
    const data = req.body;
    const url = `${process.env.BASE_URL}:${process.env.AUTH_PORT}/user/login/`;
    const response = await request('POST', url, data);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error de autenticación.') {
        return sendResponse(res, 200, '', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error de autenticación.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, 400, 'Error de autenticación.', []);
  }
}

const validarCuenta = async (req, res) => {
  try {
    const logPrefix = 'AUTH - validar cuenta: '
    const data = req.body;
    const { id } = req.query;
    const url = `${process.env.BASE_URL}:${process.env.AUTH_PORT}/user/`;
    const params = {
      id,
    }
    const response = await request('GET', url, data, params);
    console.info(`${logPrefix} response from ${url}: `, response.data);
    if (response) {
      if (response.data.msj !== 'Error al verificar correo.') {
        return sendResponse(res, 200, 'Correo verificado con éxito.', response.data.data);
      }
    } else {
      return sendResponse(res, 400, 'Error al verificar correo.', []);
    }
  } catch (error) {
    console.error(error);
    return sendResponse(res, 400, 'Error al verificar correo.', []);
  }
}

const contraseniaTemporal = async (req, res) => {
  try {
    const logPrefix = 'AUTH - contrasenia temporal: '
    const data = req.body;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/send-reset-email`;
    const response = await request('POST', url, data);
    console.info(`${logPrefix} response from ${url}: `, response.data);
    if (response) {
      if (response.data.msj !== 'Error al enviar la contraseña temporal.') {
        return sendResponse(res, 200, 'Se ha enviado un correo para restablecer la contraseña.', response.data.data);
      }
    } else {
      return sendResponse(res, 400, 'Error al enviar la contraseña temporal.', []);
    }
  } catch (error) {
    console.error(error);
    return sendResponse(res, 400, 'Error al enviar la contraseña temporal.', []);
  }
}

const reestablecerContrasenia = async (req, res) => {
  try {
    const logPrefix = 'AUTH - reestablecer contrasenia: '
    const data = req.body;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/reset/`;
    const response = await request('POST', url, data);
    console.info(`${logPrefix} response from ${url}: `, response.data);
    if (response) {
      if (response.data.msj !== 'Error al restablecer la contraseña.') {
        return sendResponse(res, 200, 'Se ha restablecido la contraseña', response.data.data);
      }
    } else {
      return sendResponse(res, 400, 'Error al restablecer la contraseña.', []);
    }
  } catch (error) {
    console.error(error);
    return sendResponse(res, 400, 'Error al restablecer la contraseña.', []);
  }
}

module.exports = {
  login,
  validarCuenta,
  contraseniaTemporal,
  reestablecerContrasenia,
}
