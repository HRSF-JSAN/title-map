const express = require('express');
const db = require('../db/dbQuery');

const router = express.Router();

router
  .get('/title/:id', (req, res) => {
    const queryString = 'select * from allInfo where id = $1';
    db.queryDB(queryString, req.params.id, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
  })
  .get('/map/:id', (req, res) => {
    const queryString = 'select * from address where id = $1';
    db.queryDB(queryString, req.params.id, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
  })
  .all('/*', (req, res) => {
    res.sendStatus(404);
  });

module.exports = router;
