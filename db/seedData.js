const client = require('./client');

// const titleData = require('./data/titleData.json');
const mapData = require('./data/mapData.json');
const motherData = require('./data/MomaDummyData');
const types = [];

motherData.data.forEach((item, index) => {
  item.foodType.forEach((i) => {
    if (types.indexOf(i) === -1) {
      types.push(i);
    }
  });
  if (index === motherData.data.length - 1) {
    types.forEach((type) => {
      const queryString = 'insert into Types (type) values ($1)';
      client.query(queryString, [type], (err) => {
        if (err) throw new Error(err.stack);
      });
    });
  }
});

const insertData = (title, map) => {
  title.forEach((item) => {
    const queryString = 'INSERT INTO Restaurant (title, numstars, price, id) VALUES($1, $2, $3, $4)';
    client.query(queryString, [item.title, item.rating, item.price, item.id], (err) => {
      if (err) throw new Error(err.stack);
    });
    const associationTable = 'INSERT INTO Restaurant_Types (id_Restaurant, id_Types) VALUES($1, $2)';
    item.foodType.forEach((type) => {
      client.query(associationTable, [item.id, motherData.types[type]], (err) => {
        if (err) throw new Error(err.stack);
      });
    });
  });
  map.forEach((item, index) => {
    const queryString = 'insert into address (address, image, phoneNumber, id_restaurant) VALUES($1, $2, $3, $4)';
    const values = [item.address, item.image, item.phoneNumber, item.id];
    client.query(queryString, values)
      .catch((error) => { throw new Error(error); })
      .then(() => {
        if (index === map.length - 1) {
          client.end();
        }
      });
  });
};
insertData(motherData.data, mapData);

exports.insertData = insertData;
