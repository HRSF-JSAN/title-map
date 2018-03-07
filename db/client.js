const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
});

client.connect()
  .catch((e) => { throw new Error(e.stack); });

module.exports = client;
