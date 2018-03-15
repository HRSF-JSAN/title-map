const faker = require('faker');
const fs = require('fs');

var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const types = {
  American: 1,
  Italian: 2,
  French: 3,
  Brunch: 4,
  Chinese: 5,
  Mexican: 6,
  Pizza: 7,
  Indian: 8,
  Bars: 9,
  SmallBites: 10,
  Salads: 11,
  WineBars: 12,
  Seafood: 13,
  Burmese: 14,
};

const food = Object.keys(types);

// let batchSize = 10000000;

// const createFile = () => {
//   for (let j = 0; j < batchSize; j += 1) {
//     let data = `${j},${faker.lorem.word()},${faker.random.arrayElement([1, 2, 3, 4, 5])},${faker.random.arrayElement(["$", "$$", "$$$", "$$$$", "$$$$$"])}\n`;
//     fs.appendFileSync('batchfile0.csv', data);
//   }
// };

// createFile();


const writeStream = fs.createWriteStream('./batchResSpeedFile.csv');

const makeData = (num) => {
  let drain = true;
  let index = num;

  while (index < 1e7 && drain) {
    drain = writeStream.write(`${index},${faker.lorem.word()},${faker.random.arrayElement([1, 2, 3, 4, 5])},${faker.random.arrayElement(["$", "$$", "$$$", "$$$$", "$$$$$"])}\n`);
    index += 1;
  }
  if (index < 1e7) {
    writeStream.once('drain', () => makeData(index) + '\n');
  }
};

makeData(0);
