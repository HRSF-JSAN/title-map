const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routes = require('./router');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/title', express.static(path.resolve(__dirname, '../client/dist')));
app.use('/map/:id', express.static(path.resolve(__dirname, '../client/dist')));

app.use('/title', routes);
module.exports = app;
