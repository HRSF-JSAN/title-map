import $ from 'jquery';

const getDummyTitle = (callback) => {
  $.get('/title')
    .done((data) => { callback(null, data); })
    .fail((error) => { callback(error, null); });
}; // END GET DUMMYDATA

const getDummyMaps = (callback) => {
  $.get('/map')
    .done((data) => { callback(null, data); })
    .fail((error) => { callback(error, null); });
}; // END GET MAP DUMMYDATA

export { getDummyTitle, getDummyMaps };
