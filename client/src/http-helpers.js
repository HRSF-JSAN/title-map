import $ from 'jquery';

const Promise = require('bluebird');

const getDummyTitle = (callback) => {
  $.get('/title', (err, data) => {
    return new Promise( (resolve, reject) => {
      if (err) reject(err);
      resolve(data);
    }).then((result) => {
      callback(null, result);
    }).catch(error => callback(error));
  });
}; // END GET DUMMYDATA

export default getDummyTitle;
