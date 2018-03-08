const mapData = require('../data/mapData.json');

const addressData = restaurant => ({
  address: restaurant.address,
  image: restaurant.image,
  phonenumber: restaurant.phoneNumber,
  id_restaurant: restaurant.id,
});

exports.seed = knex => (
  knex('address').del()
    .then(() => knex('address').insert(mapData.map(addressData)))
);
