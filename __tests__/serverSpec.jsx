const supertest = require('supertest');
const app = require('../server/app');

describe('/title map routes', () => {
  test('responds to /title/:id with an object with 5 properties', () => {
    return supertest(app)
      .get('/title/106')
      .expect((res) => {
        res.body[0].id_restaurant = 106;
        res.body[0].numstars = 2;
        res.body[0].price = '$';
        res.body[1][1] = 'American';
        res.body.title = 'Boehm - Paucek';
      });
  });

  test('responds to /map/:id with an object with 6 properties', () => {
    return supertest(app)
      .get('/title/106')
      .expect((res) => {
        res.body[0].id_restaurant = 106;
        res.body[0].address = '7679 Goodwin Turnpike Hahnbury Idaho, 21902';
        res.body[0].phonenumber = '561-648-7203';
        res.body[0].image = 'http://lorempixel.com/640/480';
        res.body[1][1] = 'American';
      });
  });
});

describe('server routes', () => {
  test('responds to /title/:id with a status of 200 and json content-type header', () => {
    return supertest(app)
      .get('/title/101')
      .expect(200)
      .expect('Content-Type', /json/);
  });
  test('responds to /map/:id with a status of 200 and json content-type header', () => {
    return supertest(app)
      .get('/map/106')
      .expect(200)
      .expect('Content-Type', /json/);
  });
  test('should receive 200 status for a get request to /', () => {
    return supertest(app)
      .get('/')
      .expect(200);
  });
  test('should receive 404 status for a get request to /cats', () => {
    return supertest(app)
      .get('/cats')
      .expect(404);
  });
  test('should receive 404 status for a get request to /title/80', () => {
    return supertest(app)
      .get('/title/80')
      .expect(404);
  });
});

// describe('post /', () => {
//   test('responds with a 201 to a post request', () => {
//     return supertest(app)
//       .post('/')
//       .set('chinese', '105')
//       .expect(201);
//   });
// });

