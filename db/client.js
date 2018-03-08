require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  database: process.env.POSTGRES_DB,
});
console.log('client connect!!!!!!!!!!');
client.connect()
  .then(() => console.log('connection!'))
  .catch(e => console.log(e));

client.on('error', (err) => {
  console.error('something bad!', err.stack);
});

module.exports = client;
