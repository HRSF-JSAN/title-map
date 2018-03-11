/* eslint-disable */
const restaurants = {
  1: { title: 'Taqueria Los Mayas' },
  2: { title: 'El Farolito' },
  3: { title: 'Robertos' },
  4: { address: '1234 Mayberry Lane' },
};

export default getRestaurant = id => (
  new Promise((resolve, reject) => {
    const restaurant = restaurants[id];
    process.nextTick(() => (
      restaurant ? resolve(restaurant)
        : reject({
          error: 'Restaurant not found',
        })
    ));
  })
);
