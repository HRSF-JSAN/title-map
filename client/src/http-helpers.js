const axios = require('axios');
const yelp = require('yelp-fusion');

const client = yelp.client(process.env.APIKEY);

const Promise = require('bluebird');

const getTitle = (id, callback) => {
  axios(`/title/${id}`)
    .then(data => callback(null, data));
};

const getAddress = (id, callback) => {
  axios(`/map/${id}`)
    .then(data => callback(null, data));
};

const postType = (id, type, callback) => {
  axios.post('/', { type, id })
    .then(() => callback())
    .catch(err => console.error(err));
};

const callYelp = () => {
  axios({
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search',

  });
};

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
