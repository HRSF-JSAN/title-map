const express = require('express');
const db = require('../db/dbQuery');

const router = express.Router();

router
  .get('/title/:id', (req, res) => {
    const queryString = 'select * from restaurant where id = $1';
    db.queryDB(queryString, req.params.id, (err, result) => {
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
    db.queryDB(queryString, req.params.id, (err, result) => {
      if (err) res.sendStatus(500);
      else if (result[0]) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    });
  })
  .post('/', (req, res) => {
    const queryString = 'insert into restaurant_Types (id_Restaurant, id_Types) VALUES($1, $2)';
    db.postDB(queryString, [req.body.id, req.body.type], (err) => {
      if (err) res.sendStatus(500);
      else {
        res.sendStatus(201);
      }
    });
  })
  .all('/*', (req, res) => {
    res.sendStatus(404);
  });

module.exports = router;
