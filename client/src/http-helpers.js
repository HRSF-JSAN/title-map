import $ from 'jquery';

const Promise = require('bluebird');

const getTitle = (id, callback) => {
  $.getJSON(`/title/${id}`)
    .done(data => callback(null, data));
};

const getAddress = (id, callback) => {
  $.getJSON(`/map/${id}`)
    .done(data => callback(null, data));
};

const postType = (id, type, callback) => {
  $.post('/', { type, id })
    .done(() => callback())
    .fail(err => err);
};

// unexpected block statement surrounding arrow body
const getRestaurant = (id, callback) => (
  new Promise((resolve, reject) => {
    getTitle(id, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  }).then((data) => {
    getAddress(id, (error, res) => (
      error ? callback(error, null) : callback(null, [data[0], data[1], res[0]])));
  })
);

export { getTitle, getAddress, getRestaurant, postType };
