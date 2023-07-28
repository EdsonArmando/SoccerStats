const { sendResponse } = require('../tools/sendResponse');
const { request } = require('../tools/request');

const darseDeBaja = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - darse de baja: ';
    const data = req.body;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/`;
    const headers = {
      authorization,
    }
    const response = await request('DELETE', url, {}, data, headers);
    console.info(`${logPrefix} response from $  {url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al eliminar el usuario.') {
        return sendResponse(res, 200, 'Usuario eliminado con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al eliminar el usuario.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al eliminar el usuario.', []);
  }
}

const visualizarPerfil = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - visualizar perfil: ';
    const data = req.body;
    const { id } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/`;
    const params = {
      id,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener el usuario.') {
        return sendResponse(res, 200, 'Usuario obtenido con éxito.', response.data.data);
      }
    }
    return sendResponse(res, response.data.status, 'Error al obtener el usuario.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener el usuario.', []);
  }
}

const comprarMembresia = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - comprar membresia: ';
    const data = req.body;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/membership/`;
    const headers = {
      authorization,
    }
    const response = await request('POST', url, data, {}, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al comprar membresía.') {
        return sendResponse(res, 200, 'Membresía comprada con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al comprar membresía.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al comprar membresía.', []);
  }
}

const bajaMembresia = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - baja membresia: ';
    const data = req.body;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/membership/`;
    const headers = {
      authorization,
    }
    const response = await request('PUT', url, {}, data, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al cancelar membresía.') {
        return sendResponse(res, 200, 'Membresía cancelada con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al cancelar membresía.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al cancelar membresía.', []);
  }
}

const equiposFavoritos = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - equipos favoritos: ';
    // eslint-disable-next-line camelcase
    const { id_client } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/client/teamfav/`;
    const params = {
      // eslint-disable-next-line camelcase
      id_client,
    }
    const headers = {
      authorization,
    }
    const response = await request('POST', url, {}, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener los equipos favoritos.') {
        return sendResponse(res, 200, 'Favoritos obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener los equipos favoritos.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener los equipos favoritos.', []);
  }
}

const personasMayores = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - personas mayores: ';
    const data = req.body;
    const { age, player } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/report/2/`;
    const params = {
      age,
      player,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener los jugadores o técnicos mayores a x años.') {
        return sendResponse(res, 200, 'Jugadores o técnicos mayores a x años obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener los jugadores o técnicos mayores a x años.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener los jugadores o técnicos mayores a x años.', []);
  }
}

const personasMenores = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - personas menores: ';
    const data = req.body;
    const { age, player } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/report/3/`;
    const params = {
      age,
      player,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener los jugadores o técnicos menores a x años.') {
        return sendResponse(res, 200, 'Jugadores o técnicos menores a x años obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener los jugadores o técnicos menores a x años.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener los jugadores o técnicos menores a x años.', []);
  }
}

const equiposAntiguos = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - equipos antiguos: ';
    const data = req.body;
    const { age } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/report/6/`;
    const params = {
      age,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener los equipos con x años de antigüedad.') {
        return sendResponse(res, 200, 'Equipos con x años de antigüedad obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener los equipos con x años de antigüedad.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener los equipos con x años de antigüedad.', []);
  }
}

const estadiosCapacidad = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - estadios capacidad: ';
    const data = req.body;
    const { capacity } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/report/8/`;
    const params = {
      capacity,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener los estadios con capacidad menor o igual a x.') {
        return sendResponse(res, 200, 'Estadios con capacidad menor o igual a x obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener los estadios con capacidad menor o igual a x.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener los estadios con capacidad menor o igual a x.', []);
  }
}

const partidosGoles = async (req, res) => {
  try {
    const logPrefix = 'CUSTOMER - partidos goles: ';
    const data = req.body;
    const { goals } = req.query;
    const { authorization } = req.headers;
    const url = `${process.env.BASE_URL}:${process.env.CUSTOMER_PORT}/report/11/`;
    const params = {
      goals,
    }
    const headers = {
      authorization,
    }
    const response = await request('GET', url, data, params, headers);
    console.info(`${logPrefix} response from ${url}:`, response.data);
    if (response) {
      if (response.data.msg != 'Error al obtener los partidos donde hubo x cantidad de goles.') {
        return sendResponse(res, 200, 'Partidos donde hubo x cantidad de goles obtenidos con éxito.', response.data.data);
      }
    }

    return sendResponse(res, 400, 'Error al obtener los partidos donde hubo x cantidad de goles.', []);
  } catch (error) {
    console.error(error);
    return sendResponse(res, error.response.status, 'Error al obtener los partidos donde hubo x cantidad de goles.', []);
  }
}

module.exports = {
  darseDeBaja,
  visualizarPerfil,
  comprarMembresia,
  bajaMembresia,
  equiposFavoritos,
  personasMayores,
  personasMenores,
  equiposAntiguos,
  estadiosCapacidad,
  partidosGoles,
}
