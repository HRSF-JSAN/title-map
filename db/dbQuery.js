const { client } = require('../server/app');

const findAll = (callback) => {
  const queryString = 'select * from restaurant inner join Restaurant_Types on restaurant.id = Restaurant_Types.id_Restaurant inner join Types on Restaurant_Types.id_Types = Types.id';
  client.query(queryString, (err, res) => {
    if (err) throw new Error(err.stack)
    console.log(res);
  });
};
// implement promises above --TODO

findAll();
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
