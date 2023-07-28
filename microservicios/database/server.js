const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 4100;
const app = express();

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

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
module.exports = app;
