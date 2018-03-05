const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  // user: process.env.POSTGRES_USER || 'michaeldurfey',
  database: process.env.POSTGRES_DB || 'restaurantyelp',
});

client.connect()
  .catch((e) => { throw new Error(e.stack); });

module.exports = client;
