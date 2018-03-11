import getRestaurant from '../../client/src/http-helpers';

const fs = require('fs');
const newData = require('./newData');
const { data } = require('./MomaDummyData');
const mapData = require('./mapData.json');


data.forEach(item => (
  getRestaurant(item.title)
    .then(response => (
      fs.writeFileSync('./newData.js', response)
    ))));
