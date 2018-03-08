const motherData = require('../data/MomaDummyData');
/*eslint-disable*/
const typesArr = Object.keys(motherData.types);
console.log('typesArr ' + typesArr)
console.log(typesArr.map(t => ({type: t})))
exports.seed = function(knex, Promise) {
  return knex('types')
    .del()
    .then(() => knex('types').insert(typesArr.map(t => ({type: t}))));
};
