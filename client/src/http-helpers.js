import $ from 'jquery';

const getTitle = (id, callback) => {
  $.getJSON(`/title/${id}`)
    .done(data => callback(null, data))
    .fail(err => callback(err));
};

const getAddress = (id, callback) => {
  $.getJSON(`/map/${id}`)
    .done(data => callback(null, data))
    .fail(err => callback(err));
};

export { getTitle, getAddress };
