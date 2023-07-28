/* eslint-disable require-jsdoc */
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.pathAuth = '/esb/auth';
    this.pathCustomer = '/esb/customer';
    this.pathAdministrator = '/esb/administrator';

    this.app.use(cors({
      origin: true,
      optionsSuccessStatus: 200,
    }));

    this.app.use(function(__req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      );
      next();
    });

    this.app.use(express.json({
      limit: '10mb',
      extend: true,
    }));

    this.app.use(logger('dev'));

    this.routes();
  }

  routes() {
    this.app.use(this.pathAuth, require('../routes/auth.routes'));
    this.app.use(this.pathCustomer, require('../routes/customer.routes'));
    this.app.use(this.pathAdministrator, require('../routes/administrator.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server empleado up - listening on port: ${this.port}`);
    });
  }
}

module.exports = Server;
