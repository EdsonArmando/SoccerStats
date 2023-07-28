const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
const port = process.env.PORT || 5002;
const personaPath = '/person';
const reportesPath = '';
const paisesPath = '/paises';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(personaPath, require('./routes/persona.routes'));
app.use(reportesPath, require('./routes/reportes.routes'));
app.use(paisesPath, require('./routes/ciudades.routes'));

app.listen(port, () => console.log(`Server administrador up - listening on port: ${port}`));
module.exports = app;
