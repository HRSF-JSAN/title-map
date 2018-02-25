const titleData = require('./data');
const mapData = require('./mapData');
// const seedData = require('./dataToSeed');
const { Client } = require('pg');

const client = new Client({
  database: 'restaurantyelp',
});

client.connect();

const queryString = 'INSERT INTO Restaurant (title, numStars, price, id) VALUES($1, $2, $3, $4)';

const insertTitles = (data) => {
  data.forEach((item) => {
    const queryString = 'INSERT INTO Restaurant (title, numStars, price, id) VALUES($1, $2, $3, $4)';
    const values = [item.title, item.numStars, item.price, item.id];
    client.query(queryString, values, (err) => {
      if (err) throw new Error(err.stack);
    });
  });
};
insertTitles(titleData);

const insertMaps = (data) => {
  let id = 101;
  data.forEach((item) => {
    const queryString = 'INSERT INTO Address (address, image, phoneNumber, id) VALUES($1, $2, $3, $4)';
    const values = [item.address, item.image, item.phoneNumber, id];
    client.query(queryString, values, (err) => {
      if (err) throw new Error(err.stack);
    });
    id += 1;
  });
};
insertMaps(mapData);

exports.insert = insertTitles;
exports.insertMaps = insertMaps;
