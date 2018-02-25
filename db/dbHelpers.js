const faker = require('faker');

const generateTitles = (callback) => {
  const result = [];
  for (let i = 0; i < 200; i += 1) {
    const types = ['Pizza', 'Italian', 'American', 'Chinese', 'Italian', 'Mexican', 'Indian', 'French', 'Brunch'];
    const dollarsigns = ['', '', '', '', '', '', ''].fill('$', 1, Math.floor(Math.random() * 6)).join('');
    const numStars = Math.floor((Math.random() * (5 - 1)) + 1);
    const titleShape = {
      title: faker.company.companyName(),
      type: types[Math.floor(Math.random() * 10)],
      price: dollarsigns,
      numStars,
    };
    result.push(titleShape);
  }
  callback(null, result);
};

const generateMaps = (callback) => {
  const result = [];
  for (let i = 0; i < 200; i += 1) {
    const mapShape = {
      address: faker.fake('{{address.streetAddress}} {{address.city}} {{address.state}}, {{address.zipCode}}'),
      image: faker.image.imageUrl(),
      phoneNumber: faker.phone.phoneNumberFormat(),
    };
    result.push(mapShape);
  }
  callback(null, result);
};

exports.generateTitles = generateTitles;
exports.generateMaps = generateMaps;
