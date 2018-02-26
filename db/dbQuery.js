const { client } = require('../server/app');
const findAll = () => {
  return new Promise((resolve, reject) => {
    const queryString = 'select * from allInfo';
    client.query(queryString, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  }).then(res => console.log(res))
    .catch(e => e);
};

// const findOneById = (id, callback) => {

// };

// const findOneByTitle = (title, callback) => {

// };

// const findAllByType = (type, callback) => {

// };

// const findAllByRating = (rating, callback) => {

// }
// implement promises above --TODO

async function findAllCall() {
  const result = await findAll();
  return result;
}

console.log(findAllCall());
/* {
        id: 7,
       title: 'Stark Group',
       numstars: 3,
       price: '$$$$',
       id_types: 7,
       id_restaurant: 177,
       type: 'Brunch',
    },
*/
