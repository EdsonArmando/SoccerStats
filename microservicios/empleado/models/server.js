const express = require('express');
const cors = require('cors');
const logger = require('morgan');

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT || 5001;
    this.estadiosPath = '/stadium';
    this.equiposPath = '/team';
    this.noticiasPath = '/notice';
    this.competenciasPath = '/esb/competition';
    this.partidosPath = '/soccer_games';
    this.accionesPath = '';
    this.quinielaPath = '/quiniela';

    this.app.use(cors({
      origin: true,
      optionsSuccessStatus: 200,
    }));

    this.app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
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

  routes(){
    this.app.use(this.estadiosPath, require('../routes/estadios.routes'));
    this.app.use(this.equiposPath, require('../routes/equipos.routes'));
    this.app.use(this.noticiasPath, require('../routes/noticias.routes'));
    this.app.use(this.competenciasPath, require('../routes/competencias.routes'));
    this.app.use(this.partidosPath, require('../routes/partidos.routes'));
    this.app.use(this.accionesPath, require('../routes/acciones.routes'));
    this.app.use(this.quinielaPath, require('../routes/quiniela.routes'));
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Server empleado up - listening on port: ${this.port}`);
    });
  }
}

module.exports = Server;