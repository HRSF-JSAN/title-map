const client = require('./client');

const queryDB = (queryString, value, callback) => {
  (value ? client.query(queryString, [value]) : client.query(queryString))
    .then((res) => {
      const typeQuery = 'select * from restaurantTypeView where id_restaurant = $1';
      (value ? client.query(typeQuery, [value]) : client.query(queryString))
        .then((result) => {
          const types = result.rows.map(i => i.type);
          callback(null, [res.rows[0], types]);
        }).catch((e) => {
          callback(e);
        });
    })
    .catch(e => e.stack);
};

module.exports = queryDB;
