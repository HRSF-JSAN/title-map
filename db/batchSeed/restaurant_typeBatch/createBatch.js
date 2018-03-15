const fs = require('fs');
const faker = require('faker');

/***** structure

schema table:
id: integer
type: integer

each restaurant_id has two types

*****/

// let batchSize = 10000000;

// const createFile = () => {
//   for (let i = 0; i < batchSize; i += 1) {
//     let data = `${faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10,11,12])},${i}\n`;
//     let data2 = `${faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10,11,12])},${i}\n`;

//     fs.appendFileSync('batchFile.csv', data);
//     fs.appendFileSync('batchFile.csv', data2);
//   }
// };

// createFile();

const writeStream = fs.createWriteStream('./batchResTypesSpeedFile.csv');

const makeData = (num) => {
  let drain = true;
  let index = num;

  while (index < 1e7 && drain) {
    drain = writeStream.write(`${faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10,11,12])},${index}\n`);
    drain = writeStream.write(`${faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10,11,12])},${index}\n`);
    index += 1;
  }
  if (index < 1e7) {
    writeStream.once('drain', () => makeData(index) + '\n');
  }
};

makeData(0);
