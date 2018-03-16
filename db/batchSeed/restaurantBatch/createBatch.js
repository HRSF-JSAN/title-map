const faker = require('faker');
const fs = require('fs');

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
