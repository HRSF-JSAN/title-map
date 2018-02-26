const express = require('express');
const path = require('path');
const routes = require('./router');

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use('/', routes);

module.exports = app;
