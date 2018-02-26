const fs = require('fs');
const titleData = require('./data/stringifiedData');
const motherData = require('./data/MomaDummyData');
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

const types = [];

Object.keys(motherData.types).forEach(key => types.push(key));

const newData = titleData.map((item) => {
  const convertTypes = item.type.map(type => types.indexOf(type));
  item.type = convertTypes;
  return item;
});

fs.writeFile('db/data/titleData.json', JSON.stringify(newData), (err) => {
  if (err) throw err;
});

exports.newData = newData;
exports.modifiedData = modifiedData;
