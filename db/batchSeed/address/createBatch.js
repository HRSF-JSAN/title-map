const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('./batchAddressSpeedFile.csv');

const makeData = (num) => {
  let drain = true;
  let index = num;

  while (index < 1e7 && drain) {
    drain = writeStream.write(`${faker.address.streetAddress()},${faker.image.imageUrl()},${faker.phone.phoneNumber()},${index}\n`);
    index += 1;
  }
  if (index < 1e7) {
    writeStream.once('drain', () => makeData(index) + '\n');
  }
};

makeData(0);
