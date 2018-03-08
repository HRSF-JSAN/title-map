const restaurantData = require('../data/MomaDummyData.js');

const titleData = restaurantData.data;
const { types } = restaurantData;

const foodTypes = titleData.map(t =>
  t.foodType.map(f => (
    { id_restaurant: t.id, id_types: types[f] }
  )))
  .reduce((acc, curr) => {
    curr.forEach(i => acc.push(i));
    return acc;
  }, []);

exports.seed = knex => (
  knex('restaurant_types')
    .del()
    .then(() => knex('restaurant_types').insert(foodTypes))
);
