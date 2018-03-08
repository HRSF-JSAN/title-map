const client = require('../db/client');

describe('client tests', () => {
  test('it should connect successfully to the server', () => {
    client.query('select now()')
      .catch((e) => {
        throw new Error(e.stack);
      })
      .then((data) => {
        expect(data).toBeTruthy();
        client.end();
      });
  });
});
