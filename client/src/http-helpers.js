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

export { getTitle, getAddress };
