const axios = require('axios')

const request = async (method, url, data = {}, params = {}, headers = {}) => {
  console.log(`Request to: ${url}`);
  const options = {
    method,
    url,
    headers,
    params,
    responseType: 'json',
    data,
  }
  const response = await axios(options);
  return response;
}

module.exports = {
  request,
}
