const { sendResponse } = require('../tools/sendResponse');
const { request } = require('../tools/request');

const usuarioSuscrito = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - usuario suscrito: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { id_team } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/1/`;
    const params = {
      // eslint-disable-next-line camelcase
      id_team,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios suscritos al equipo x.') {
        return sendResponse(res, 200, 'Usuarios suscritos al equipo x obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios suscritos al equipo x.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios suscritos al equipo x.', []);
  }
}

const membresiaUsuario = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - membresia usuario: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { membership } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/2/`;
    const params = {
      // eslint-disable-next-line camelcase
      membership,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios con o sin membresía.') {
        return sendResponse(res, 200, 'Usuarios con o sin membresía obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios con o sin membresía.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios con o sin membresía.', []);
  }
}

const masMembresias = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - mas membresias: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/3/`;
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, {}, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios con mas membresías.') {
        return sendResponse(res, 200, 'Usuarios con mas membresías obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios con mas membresías.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios con mas membresías.', []);
  }
}

const dineroGastado = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - dinero gastado: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/4/`;
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, {}, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios con mas dinero gastado.') {
        return sendResponse(res, 200, 'Usuarios con mas dinero gastado obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios con mas dinero gastado.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios con mas dinero gastado.', []);
  }
}

const usuariosPais = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - usuarios pais: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { id_country } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/5/`;
    const params = {
      // eslint-disable-next-line camelcase
      id_country,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios de x país.') {
        return sendResponse(res, 200, 'Usuarios de x país obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios de x país.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios de x país.', []);
  }
}

const usuariosGenero = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - usuarios genero: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { gender } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/6/`;
    const params = {
      // eslint-disable-next-line camelcase
      gender,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios de x genero.') {
        return sendResponse(res, 200, 'Usuarios de x genero obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios de x genero.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios de x genero.', []);
  }
}

const edadUsuarios = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - edad usuarios: ';
    // eslint-disable-next-line camelcase
    const { age } = req.query;
    const { authorization } = req.headers;
    console.log(authorization);
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/7/`;
    const params = {
      // eslint-disable-next-line camelcase
      age,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, {}, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener usuarios con al menos x años de edad.') {
        return sendResponse(res, 200, 'Usuarios con al menos x años de edad, obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener usuarios con al menos x años de edad.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener usuarios con al menos x años de edad.', []);
  }
}

const noticiasEmpleado = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - noticias empleado: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { order } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/8/`;
    const params = {
      // eslint-disable-next-line camelcase
      order,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener empleados con mas o menos noticias publicadas.') {
        return sendResponse(res, 200, 'Empleados con mas o menos noticias publicadas, obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener empleados con mas o menos noticias publicadas.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener empleados con mas o menos noticias publicadas.', []);
  }
}

const noticiasEmpleadoEquipo = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - membresia usuario: ';
    const data = req.body;
    // eslint-disable-next-line camelcase
    const { order, id_team } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/9/`;
    const params = {
      // eslint-disable-next-line camelcase
      id_team,
      order,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener empleados con mas o menos noticias publicadas de x equipo.') {
        return sendResponse(res, 200, 'Empleados con mas o menos noticias publicadas de x equipo, obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener empleados con mas o menos noticias publicadas de x equipo.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener empleados con mas o menos noticias publicadas de x equipo.', []);
  }
}

const bitacora = async (req, res) => {
  try {
    const logPrefix = 'ADMINISTRATOR - bitacora: ';
    const data = req.body;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.ADMINISTRATOR_PORT}/report/10/`;
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, {}, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener bitácora de los administradores.') {
        return sendResponse(res, 200, 'Bitácora de los administradores obtenida con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener bitácora de los administradores.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener bitácora de los administradores.', []);
  }
}

module.exports = {
  usuarioSuscrito,
  membresiaUsuario,
  masMembresias,
  dineroGastado,
  usuariosPais,
  usuariosGenero,
  edadUsuarios,
  noticiasEmpleado,
  noticiasEmpleadoEquipo,
  bitacora,
}
