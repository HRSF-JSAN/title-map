const $ = require('jquery');

const getTitle = (id, cb) => {
  $.ajax({
    url: `/title/${id}`,
    method: 'GET',
    success: (data) => {
      cb(null, JSON.parse(data));
    },
  });
};

const getAddress = (id, cb) => {
  $.ajax({
    url: `address/${id}`,
    method: 'GET',
    success: (data) => {
      cb(null, JSON.parse(data));
    },
  });
};

module.exports.getTitle = getTitle;
module.exports.getAddress = getAddress;
