const restaurantData = require('../data/MomaDummyData.js');

const titleData = restaurantData.data;
/* eslint-disable */
const restInfo = restaurant => ({
  id: restaurant.id,
  title: restaurant.title,
  rating: restaurant.rating,
  price: restaurant.price
});

exports.seed = function(knex, Promise) {
  return knex('restaurant').del()
    .then(() => {
      return knex('restaurant').insert(titleData.map(restInfo));
    })
};
