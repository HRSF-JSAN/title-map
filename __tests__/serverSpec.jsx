import { getDummyTitle, getDummyMaps } from '../client/src/http-helpers';

const supertest = require('supertest');
const app = require('../server/app');

describe('/map route tests', () => {
  test('should not have an error for a get request to /map', () => {
    getDummyMaps((err, result) => {
      expect(result).toHaveLength(200);
    });
  });
  test('should receive 200 status for a get request to /map', () => {
    getDummyMaps((err, result) => {
      expect(result.statusCode()).toBe(200);
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
      expect(result.statusCode()).toBe(200);
    });
  });

  test('should receive an array with length 200 for a get request to /title', () => {
    getDummyTitle((err, result) => {
      expect(result).toHaveLength(200);
    });
  });
});

describe('server routes', () => {
  test('responds to /title/:id with a status of 200', () => {
    supertest(app)
      .get('/title/101')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) throw err;
      });
  });
});
