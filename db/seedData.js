const titleData = require('./data/titleData');
const mapData = require('./data/mapData');
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

const insertTitles = (data) => {
  data.forEach((item) => {
    const queryString = 'INSERT INTO Restaurant (title, numStars, price, id) VALUES($1, $2, $3, $4)';
    client.query(queryString, [item.title, item.numStars, item.price, item.id], (err) => {
      if (err) throw new Error(err.stack);
    });
    const associationTable = 'INSERT INTO Restaurant_Types (id_Restaurant, id_Types) VALUES($1, $2)';
    item.type.forEach((type) => {
      client.query(associationTable, [item.id, type], (err) => {
        if (err) throw new Error(err.stack);
      });
    });
  });
};
insertTitles(titleData);

const insertMaps = (data) => {
  data.forEach((item) => {
    const queryString = 'insert into address (address, image, phoneNumber, id_restaurant) VALUES($1, $2, $3, $4)';
    const values = [item.address, item.image, item.phoneNumber, item.id];
    client.query(queryString, values, (err) => {
      if (err) throw new Error(err.stack);
    }).then(() => client.end());
  });
};
insertMaps(mapData);
