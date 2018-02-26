//generates and modifies data:
const fs = require('fs');
const mapData2 = require('./data/mapData2');
const mapData = require('./data/mapData');
const motherData = require('./data/MomaDummyData');
const faker = require('faker');

let id = 101;
const modifiedData = titleData.map((item) => {
  const randomNumber = Math.random();
  item.id = id;
  id += 1;
  const result = [];
  if (item.type) result.push(item.type);
  if (randomNumber >= .5 || item.type === undefined) {
    const randomIndex = Math.floor(Math.random() * 9);
    const types = ['Pizza', 'Italian', 'American', 'Chinese', 'Italian', 'Mexican', 'Indian', 'French', 'Brunch'];
    const randomType = types[randomIndex];
    if (!result.includes(randomType)) {
      result.push(randomType);
    } 
  }
  item.type = result;
  return item;
});

let id = 101
const newData = mapData.map((item) => {
  item.id = id;
  id += 1;
  return item;
});

fs.writeFile('db/data/mapData2.js', newData, (err) => {
  if (err) throw err;
});


const generateTitles = (callback) => {
  const result = [];
  for (let i = 0; i < 200; i += 1) {
    const types = ['Pizza', 'Italian', 'American', 'Chinese', 'Italian', 'Mexican', 'Indian', 'French', 'Brunch'];
    const dollarsigns = ['', '', '', '', '', '', ''].fill('$', 1, Math.floor(Math.random() * 6)).join('');
    const numStars = Math.floor((Math.random() * (5 - 1)) + 1);
    const titleShape = {
      title: faker.company.companyName(),
      type: types[Math.floor(Math.random() * 10)],
      price: dollarsigns,
      numStars,
    };
    result.push(titleShape);
  }
  callback(null, result);
};

const generateMaps = (callback) => {
  const result = [];
  for (let i = 0; i < 200; i += 1) {
    const mapShape = {
      address: faker.fake('{{address.streetAddress}} {{address.city}} {{address.state}}, {{address.zipCode}}'),
      image: faker.image.imageUrl(),
      phoneNumber: faker.phone.phoneNumberFormat(),
    };
    result.push(mapShape);
  }
  callback(null, result);
};

exports.generateTitles = generateTitles;
exports.generateMaps = generateMaps;

