require('newrelic');
const express = require('express');
const path = require('path');
const routes = require('./router');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3500);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

module.exports = app;
