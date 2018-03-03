const helper = require('../client/src/http-helpers');

describe('http-helper tests', () => {
  test('getRestaurant should correctly retrieve a restaurant', () => {
    helper.getRestaurant(202, (err, result) => {
      expect(result[0]).toHaveProperty('title');
      expect(result.exists()).toBeTruthy();
      expect(result[1]).toHaveLength(1);
      expect(result[2]).toHaveProperty('address');
    });
  });
  test('getAddress should return an address', () => {
    helper.getAddress(150, (err, result) => {
      expect(result[0]).toHaveProperty('address');
      expect(result[0].address).toBeTruth();
      expect(result[0]).toHaveLength(1);
    });
  });
  test('getTitle should return a title', () => {
    helper.getTitle(240, (err, result) => {
      expect(result[0]).toHaveProperty('numstars');
      expect(result[0].price).toBeTruth();
      expect(result[0]).toHaveLength(1);
    });
  });
  test('post Type should post a type', () => {
    helper.postType(140, 'mexican', (err) => {
      expect(err.stack).toBeUndefined();
    });
  });
  test('post should return an error with an invalid id', () => {
    helper.postType(7777, 'mexican', (err) => {
      expect(err.stack).toBeTruthy();
    });
  });
});
