const titleData = require('./data/titleData.json');
const mapData = require('./data/mapData.json');
const motherData = require('./data/MomaDummyData');
const { Client } = require('pg');

const client = new Client({
  database: 'restaurantyelp',
});

client.connect();

Object.keys(motherData.types).forEach((type) => {
  const queryString = 'insert into Types (type) values ($1)';
  client.query(queryString, [type], (err) => {
    if (err) throw new Error(err.stack);
  });
});

const insertData = (title, map) => {
  title.forEach((item) => {
    const queryString = 'INSERT INTO Restaurant (title, numstars, price, id) VALUES($1, $2, $3, $4)';
    client.query(queryString, [item.title, item.numsStars, item.price, item.id], (err) => {
      if (err) throw new Error(err.stack);
    });
    const associationTable = 'INSERT INTO Restaurant_Types (id_Restaurant, id_Types) VALUES($1, $2)';
    item.type.forEach((type) => {
      client.query(associationTable, [item.id, type], (err) => {
        if (err) throw new Error(err.stack);
      });
    });
  });
  map.forEach((item) => {
    const queryString = 'insert into address (address, image, phoneNumber, id_restaurant) VALUES($1, $2, $3, $4)';
    const values = [item.address, item.image, item.phoneNumber, item.id];
    client.query(queryString, values)
      .catch((error) => { throw new Error(error); });
  });
};
insertData(titleData, mapData, (err) => {
  if (err) {
    throw new Error(err);
  }
});

exports.insertData = insertData;
