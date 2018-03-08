require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  database: process.env.POSTGRES_DB,
});

client.connect()
  .then(() => console.log('connection!'))
  .catch(e => console.log(e));

module.exports = client;
