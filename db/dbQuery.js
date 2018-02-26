const { Client } = require('pg');

const client = new Client({
  database: 'restaurantyelp',
});

client.connect()
  .catch((e) => { throw new Error(e.stack); });

const queryDB = (queryString, value, callback) => {
  client.query(queryString, [value])
    .then(res => callback(null, res.rows))
    .catch(e => callback(e.stack, null));
};

module.exports = queryDB;
