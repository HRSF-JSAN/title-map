import $ from 'jquery';

const getTitle = (id, callback) => {
  $.getJSON(`/title/${id}`)
    .done(data => callback(null, data));
};

const getAddress = (id, callback) => {
  $.getJSON(`/map/${id}`)
    .done(data => callback(null, data));
};

const postType = (id, type, callback) => {
  $.post('/', { type, id }, (err, res) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, res);
    }
  });
};

const getRestaurant = (id, callback) => {
  getTitle(id, (err, data) => {
    getAddress(id, (error, result) => (
      error ? callback(error, null) : callback(null, [data[0], data[1], result[0]])
    ));
  });
};

export { getTitle, getAddress, getRestaurant, postType };
