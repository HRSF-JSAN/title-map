const express = require('express');
const db = require('../db/dbQuery');
const client = require('../db/client');

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
    db.postDB('insert into Types (type) VALUES ($1)', [req.body.type])
      .then(() => {
        const { id } = req.body;
        client.query('select * from Types where type in ($1)', [req.body.type])
          .then((data) => {
            const queryString = 'insert into restaurant_types (id_restaurant, id_types) VALUES($1, $2)';
            db.postDB(queryString, [id, data.rows[0].id])
              .then(() => {
                res.sendStatus(201);
              })
              .catch(() => {
                res.sendStatus(500);
              });
          });
      })
      .catch(() => res.sendStatus(500));
  })
  .all('/*', (req, res) => {
    res.sendStatus(404);
  });

module.exports = router;
