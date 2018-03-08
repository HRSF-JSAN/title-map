const restaurantData = require('../data/MomaDummyData.js');
const titleData = restaurantData.data;
const { types } = restaurantData;
/*eslint-disable*/

const newData = titleData.map(t => t.foodType.map(f => ({id_restaurant: t.id, id_types: types[f]}))).reduce((acc, curr) => {
  curr.forEach(i => acc.push(i))
  return acc;
}, []);

exports.seed = function(knex, Promise) {
  return knex('restaurant_types')
    .del()
    .then(() => knex('restaurant_types').insert(newData));

};
