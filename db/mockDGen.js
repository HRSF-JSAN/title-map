const fs = require('fs');
const mapData2 = require('./data/mapData2');
const mapData = require('./data/mapData');
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

let id = 101
const newData = mapData.map((item) => {
  item.id = id;
  id += 1;
  return item;
});

fs.writeFile('db/data/mapData2.js', newData, (err) => {
  if (err) throw err;
});



