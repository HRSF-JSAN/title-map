const motherData = require('../data/MomaDummyData');

const typesArr = Object.keys(motherData.types);

exports.seed = knex => (
  knex('types')
    .del()
    .then(() => knex('types').insert(typesArr.map(t => ({ type: t }))))
);
