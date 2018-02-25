// const fs = require('fs');
const titleData = require('./data');
const motherData = require('./MomaDummyData')
// let id = 101;
// const modifiedData = titleData.map((item) => {
//   const randomNumber = Math.random();
//   item.id = id;
//   id += 1;
//   const result = [];
//   if (item.type) result.push(item.type);
//   if (randomNumber >= .5 || item.type === undefined) {
//     const randomIndex = Math.floor(Math.random() * 9);
//     const types = ['Pizza', 'Italian', 'American', 'Chinese', 'Italian', 'Mexican', 'Indian', 'French', 'Brunch'];
//     const randomType = types[randomIndex];
//     if (!result.includes(randomType)) {
//       result.push(randomType);
//     } 
//   }
//   item.type = result;
//   return item;
// });
// // console.log(modifiedData)
// fs.writeFile('db/data.js', JSON.stringify(modifiedData), (err) => {
//   if (err) throw err;
// });


// exports.titleData = titleData;
var types = [];

Object.keys(motherData.types).forEach(key => types.push(key));

let newData = titleData.map((item) => {
  const convertTypes = item.type.map(type => types.indexOf(type));
  item.type = convertTypes;
  return item;
});

module.exports = newData;
