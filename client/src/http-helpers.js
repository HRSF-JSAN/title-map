const axios = require('axios');

const getTitle = id => (
  axios(`/title/${id}`)
);

const getAddress = id => (
  axios(`/map/${id}`)
);

const postType = (id, type) => (
  axios.post('/', { type, id })
);

// const callYelp = term => (
//   axios.get(`/yelp/${term}`)
//     .then(data => data)
// );

const getRestaurant = id => (
  axios.all([getAddress(id), getTitle(id)])
    .then(axios.spread((address, title) => 
      console.log('here', address, title)
      [address, title]
    ))
    .catch(err => console.log(err))
);

export { getTitle, getAddress, getRestaurant, postType };
