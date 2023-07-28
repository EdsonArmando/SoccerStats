const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const admin = require('./routes/client');
const reportes = require('./routes/reportes');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
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
app.use('/client', admin);
app.use('', reportes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
module.exports = app;
