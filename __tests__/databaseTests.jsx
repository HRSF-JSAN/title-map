const dbQuery = require('../db/dbQuery.js');

describe('seedsData', () => {

  test('it should retrieve seeded data', () => {
    dbQuery('select * from title', (err, result) => {
      if (err) {
        throw new Error(err);
      }
      expect(result.exists()).toBe('true');
      expect(result.type()).toBe('object');
    });
  });
  test('it should return an empty result for nonExistant data', () => {
    dbQuery('select * from ')
  })
});
