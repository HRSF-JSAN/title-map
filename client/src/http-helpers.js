import $ from 'jquery';

const getDummyTitle = (callback) => {
  $.getJSON('/title/:id')
    .done(data => callback(null, data))
    .fail(err => callback(err));
}; // END GET DUMMYDATA

const getDummyMaps = (callback) => {
  $.get('/map/:id')
    .done(data => callback(null, data))
    .fail(err => callback(err));
}; // END GET MAP DUMMYDATA

export { getDummyTitle, getDummyMaps };
