const express = require('express');
const path = require('path');
// const dbHelpers = require('./db/dbHelpers.js');
const routes = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use('/', routes);

// app.get('/title', (req, res) => {
//   dbHelpers.generateTitles((err, result) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get('/map', (req, res) => {
//   dbHelpers.generateMaps((err, result) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.send(result);
//     }
//   });
// });

module.exports = app;
