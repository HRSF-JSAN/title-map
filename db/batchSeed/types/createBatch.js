const fs = require('fs');
const data = require('../../data/MomaDummyData.js');

const typesArr = Object.keys(data.types);

const writeStream = fs.createWriteStream('./batchTypesSpeedFile.csv');

const makeData = (num) => {
  let drain = true;
  let index = num;

  while (index < typesArr.length && drain) {
    drain = writeStream.write(`${typesArr[index]}\n`);
    index += 1;
  }
  if (index < typesArr.length) {
    writeStream.once('drain', () => makeData(index) + '\n');
  }
};

makeData(0);
