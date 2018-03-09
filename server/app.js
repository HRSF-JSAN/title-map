const express = require('express');
const path = require('path');
const morgan = require('morgan'); // eslint-disable-line
const routes = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../index.html')));

app.use('/', routes);

module.exports = app;
