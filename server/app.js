const express = require('express');
const path = require('path');
// const dbHelpers = require('./db/dbHelpers.js');
const { Client } = require('pg');
const routes = require('./router');
const bodyParser = require('body-parser');

const app = express();

const client = new Client({
  database: 'restaurantyelp',
});

client.connect();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use('/', routes);

exports.app = app;
exports.client = client;
