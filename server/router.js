const express = require('express');
const db = require('../db/dbQuery');

const router = express.Router();

router
  .get('/title/:id', (req, res) => {
    const queryString = 'select * from restaurant where id = $1';
    db(queryString, req.params.id, (err, result) => {
      if (err) res.sendStatus(500);
      else if (result[0]) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    });
  })
  .get('/map/:id', (req, res) => {
    const queryString = 'select * from address where id_restaurant = $1';
    db(queryString, req.params.id, (err, result) => {
      if (err) res.sendStatus(500);
      else if (result[0]) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    });
  })
  .all('/*', (req, res) => {
    res.sendStatus(404);
  });

module.exports = router;
