require('newrelic');
require('dotenv').config();
const path = require('path');

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PW,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  },
  migrations: {
    directory: path.join(__dirname, '/db/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '/db/seeds'),
  },
};
