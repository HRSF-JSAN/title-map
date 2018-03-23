require('newrelic');
require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

client.connect()
  .catch((e) => { throw new Error(e); });

module.exports = client;
