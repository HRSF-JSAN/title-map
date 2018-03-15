const fs = require('fs');
const data = require('../../data/MomaDummyData.js');

const typesArr = Object.keys(data.types);

// const createFile = () => {
  

//   for (let i = 0; i < typesArr.length; i += 1) {
//     fs.appendFileSync('batchFile.csv', `${typesArr[i]}\n`);
//   }
// };

// createFile();

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
