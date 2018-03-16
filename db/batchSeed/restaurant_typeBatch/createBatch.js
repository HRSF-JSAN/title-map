const fs = require('fs');
const faker = require('faker');

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
