const express = require('express');
const path = require('path');
const morgan = require('morgan'); // eslint-disable-line
const routes = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

module.exports = app;
