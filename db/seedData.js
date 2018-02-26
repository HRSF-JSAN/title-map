const titleData = require('./data/titleData');
const mapData = require('./data/mapData');
const motherData = require('./data/MomaDummyData');
const convertedTypes = require('./addTypes');
// const seedData = require('./dataToSeed');
const { Client } = require('pg');

const client = new Client({
  database: 'restaurantyelp',
});

client.connect();

let id = 0;
Object.keys(motherData.types).forEach((type) => {
  const queryString = 'insert into Types (id, type) values ($1, $2)';
  client.query(queryString, [id, type], (err) => {
    if (err) throw new Error(err.stack);
  });
  id += 1;
});

const insertTitles = (data) => {
  data.forEach((item) => {
    const queryString = 'INSERT INTO Restaurant (title, numStars, price, id) VALUES($1, $2, $3, $4)';
    client.query(queryString, [item.title, item.numStars, item.price, item.id], (err) => {
      if (err) throw new Error(err.stack);
    });
    const associationTable = 'insert into Restaurant_Types (id_Restaurant, id_Types) VALUES($1, $2)';
    item.type.forEach((type) => {
      client.query(associationTable, [item.id, type], (err) => {
        if (err) throw new Error(err.stack);
      });
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

const insertTypes = (data) => {
  let id = 101
}

exports.insert = insertTitles;
exports.insertMaps = insertMaps;
