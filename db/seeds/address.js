const mapData = require('../data/mapData.json');
/*eslint-disable*/
const addressData = restaurant => ({
  address: restaurant.address,
  image: restaurant.image,
  phonenumber: restaurant.phoneNumber,
  id_restaurant: restaurant.id,
});
exports.seed = function(knex, Promise) {
  return knex('address').del()
    .then(() => knex('address').insert(mapData.map(addressData)));
};
