const { request, response } = require('express');
const { validationResult } = require('express-validator');

const checkBody = (req = request, res = response, next) => {
  const errors = validationResult(req);
  if ( !errors.isEmpty() ){
    return res.status(500).json({
      status: false,
      errores: errors.mapped(),
    });
  }

  next();
}

module.exports = {
  checkBody
}