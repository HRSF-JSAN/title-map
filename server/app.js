const express = require('express');
const path = require('path');
const routes = require('./router');
const bodyParser = require('body-parser');
require('dotenv').config();

const yelp = require('yelp-fusion');

const client = yelp.client(process.env.APIKEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3500);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/yelp/:term', (req, res) => {
  const { term } = req.params;
  client.search({
    term,
    location: 'san francisco, ca',
  }).then(response => res.send(response.jsonBody.businesses[0]))
    .catch((e) => { throw new Error(e); });
});

app.use('/', routes);

module.exports = app;
