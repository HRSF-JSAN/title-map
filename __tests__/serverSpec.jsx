const supertest = require('supertest');
const app = require('../server/app');

describe('/title map routes', () => {
  test('responds to /title/:id with an object with 5 properties', () => {
    supertest(app)
      .get('/title/206')
      .expect((res) => {
        res.body[0].id_restaurant = 206;
        res.body[0].numstars = 2;
        res.body[0].price = '$';
        res.body[1][1] = 'American';
        res.body.title = 'Boehm - Paucek';
      })
      .end((err) => {
        if (err) throw err;
      });
  });

  test('responds to /map/:id with an object with 6 properties', () => {
    supertest(app)
      .get('/title/206')
      .expect((res) => {
        res.body[0].id_restaurant = 206;
        res.body[0].address = '7679 Goodwin Turnpike Hahnbury Idaho, 21902';
        res.body[0].phonenumber = '561-648-7203';
        res.body[0].image = 'http://lorempixel.com/640/480';
        res.body[1][1] = 'American';
      })
      .end((err) => {
        if (err) throw err;
      });
  });
});

describe('server routes', () => {
  test('responds to /title/:id with a status of 200 and json content-type header', () => {
    supertest(app)
      .get('/title/101')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) throw err;
      });
  });
  test('responds to /map/:id with a status of 200 and json content-type header', () => {
    supertest(app)
      .get('/map/206')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) throw err;
      });
  });
  test('should receive 200 status for a get request to /', () => {
    supertest(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) throw err;
      });
  });
  test('should receive 404 status for a get request to /*', () => {
    supertest(app)
      .get('/cats')
      .expect(404)
      .end((err) => {
        if (err) throw err;
      });
  });
  test('should receive 404 status for a get request to /title/80', () => {
    supertest(app)
      .get('/title/80')
      .expect(404)
      .end((err) => {
        if (err) throw err;
      });
  });
});
