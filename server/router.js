const express = require('express');
const db = require('../db/dbQuery');
const client = require('../db/client');

const router = express.Router();

router
  .get('/title/:id', (req, res) => {
    const queryString = 'select * from restaurant where id = $1';
    console.log('test', req.params.id); /*eslint-disable-line*/
    db.queryDB(queryString, req.params.id)
      .then((result) => {
        console.log(result); /*eslint-disable-line*/
        result[0] ? res.json(result) : res.sendStatus(404);
      })
      .catch(() => res.sendStatus(500));
  })
  .get('/map/:id', (req, res) => {
    const queryString = 'select * from address where id_restaurant = $1';
    db.queryMap(queryString, req.params.id)
      .then((result) => {
        console.log(result); /*eslint-disable-line*/
        result[0] ? res.json(result) : res.sendStatus(404);
      })
      .catch(() => res.sendStatus(500));
  })
  .post('/', (req, res) => {
    db.postDB('insert into types (type) VALUES ($1)', [req.body.type])
      .then(() => {
        const { id } = req.body;
        client.query('select * from types where type in ($1)', [req.body.type])
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
  .all('/+', (req, res) => {
    res.sendStatus(404);
  });

module.exports = router;
