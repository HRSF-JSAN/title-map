const client = require('../db/client');

describe('client tests', () => {
  test('it should connect successfully to the server', () => {
    client.query('select now()')
      .then((data) => {
        expect(data.exists()).toBe('true');
      })
      .catch((e) => {
        throw new Error(e.stack);
      });
  });
});
