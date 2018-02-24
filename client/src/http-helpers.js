import $ from 'jquery';

const getDummyTitle = (callback) => {
  $.get('/title')
    .done(data => callback(null, data));
}; // END GET DUMMYDATA

const getDummyMaps = (callback) => {
  $.get('/map')
    .done(data => callback(null, data));
}; // END GET MAP DUMMYDATA

export { getDummyTitle, getDummyMaps };
