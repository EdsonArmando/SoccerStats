const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();
const login = require('./routes/usuario');

const PORT = process.env.PORT;
const app = express();
// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE, PATCH");
  next();
});

app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/user', login);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
module.exports = app;
