const client = require('./client');

const queryDB = (queryString, value, callback) => {
  client.query(queryString, [value])
    .then((res) => {
      client.query(
        'select * from restaurantTypeView where id_restaurant = $1', [value],
        (err, result) => {
          if (err) throw new Error(err);
          const types = result.rows.map(i => i.type);
          callback(null, [res.rows[0], types]);
        },
      );
    })
    .catch(e => callback(e.stack, null));
};

module.exports = queryDB;
