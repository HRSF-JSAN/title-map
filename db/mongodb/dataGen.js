const fs = require('fs');
const faker = require('faker');
const data = require('../data/MomaDummyData.js');
const { exec } = require('child_process');

let types = Object.keys(data.types);

const writeStream = fs.createWriteStream('./batchFile.json');

const makeData = (num) => {
  let drain = true;
  let index = num;

  while (index < 1e7 && drain) {

    let data = {
      id: index,
      name: faker.random.word(),
      rating: faker.random.arrayElement([1,2,3,4,5]),
      price: faker.random.arrayElement(['$', '$$', '$$$', '$$$$', '$$$$$']),
      about: {
        address: faker.address.streetAddress(),
        number: faker.phone.phoneNumberFormat(),
        image: faker.image.imageUrl(),
      },
      type: faker.random.arrayElement(types),
    };

    drain = writeStream.write(`${JSON.stringify(data)}\n`);
    index += 1;
  }

  if (index < 1e7) {
    writeStream.once('drain', () => makeData(index));
  }

  if (index === 1e7) {
    const script = 'mongoimport --db restaurantyelp --collection restaurantyelps --file batchFile.json --numInsertionWorkers 4';
    exec(script);
  }
};

makeData(0);
