const client = require('./client');

const queryDB = (queryString, value) => (
  client.query(queryString, [value])
    .then((res) => {
      const typeQuery = 'select title, type, id_restaurant from restaurant '
      + 'inner join restaurant_types on restaurant.id = restaurant_Types.id_restaurant '
      + 'inner join types on restaurant_types.id_types = types.id where id_restaurant = $1';
      return client.query(typeQuery, [value])
        .then((result) => {
          const types = result.rows.map(i => i.type);
          return [res.rows[0], types];
        }).catch(e => e);
    }).catch(e => e));

const postDB = (postString, value) => (
  client.query(postString, value)
    .then(res => res)
    .catch(e => e.stack));

module.exports = {
  queryDB,
  postDB,
};
