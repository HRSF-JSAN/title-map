const express = require('express');
const path = require('path');
const dbHelpers = require('./db/dbHelpers.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/title', (req, res) => {
  dbHelpers.generateTitles((err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

app.get('/map', (req, res) => {
  dbHelpers.generateMaps((err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});


app.listen(3000, () => console.log('app listening on port 3000'));
