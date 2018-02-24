
import { getDummyTitle, getDummyMaps } from '../client/src/http-helpers';

describe('/map route tests', () => {
  test('should not have an error for a get request to /map', () => {
    getDummyMaps((err, result) => {
      expect(result).toHaveLength(200);
    });
  });
  test('should receive 200 status for a get request to /map', () => {
    getDummyMaps((err, result) => {
      expect(result.getResponseHeader()).toBe(true);
    });
  });

  test('should receive an array with length 200 for a get request to /map', () => {
    getDummyMaps((err, result) => {
      expect(result).toHaveLength(200);
    });
  });
});

describe('/title map routes', () => {
  test('should not have an error for a get request to /title', () => {
    getDummyTitle((err) => {
      expect(err).toBe(null);
    });
  });
  test('should receive 200 status for a get request to /title', () => {
    getDummyTitle((err, result) => {
      expect(result).type().toBe('object');
    });
  });

  test('should receive an array with length 200 for a get request to /title', () => {
    getDummyTitle((err, result) => {
      expect(result).toHaveLength(200);
    });
  });
});
