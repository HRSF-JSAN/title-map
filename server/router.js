const express = require('express');

const router = express.Router();
const db = require('../db/dbQuery');

router
  .get('/title/:id', (req, res) => {
    console.log('title route!!', req);
    res.send();
  })
  .get('/map/:id', (req, res) => {
    res.send();
  })
  .get('/', (req, res) => {
    res.send(404);
  });

module.exports = router;
