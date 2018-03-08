const restaurantData = require('../data/MomaDummyData.js');

const titleData = restaurantData.data;

const restInfo = restaurant => ({
  id: restaurant.id,
  title: restaurant.title,
  rating: restaurant.rating,
  price: restaurant.price,
});

exports.seed = knex => (
  knex('restaurant').del()
    .then(() => knex('restaurant').insert(titleData.map(restInfo)))
);
