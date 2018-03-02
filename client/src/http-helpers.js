import $ from 'jquery';

const getTitle = (id = 101, callback) => {
  $.getJSON(`/title/${id}`)
    .done(data => callback(null, data))
    .fail(err => callback(err));
};

const getAddress = (id = 101, callback) => {
  $.getJSON(`/map/${id}`)
    .done(data => callback(null, data))
    .fail(err => callback(err));
};

const getRestaurant = (id, callback) => {
  getTitle(id, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    getAddress(id, (error, result) => {
      if (error) {
        callback(err, null)
      } else {
        callback(null, [data[0], data[1], result[0]]);
      }
    });
  });
};

export { getTitle, getAddress, getRestaurant };
