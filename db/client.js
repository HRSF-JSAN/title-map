const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 'local socket',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  database: process.env.POSTGRES_DB,
});

client.connect();

module.exports = client;
