import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const client = require('../db/client');

const dbQuery = require('../db/dbQuery.js');

configure({ adapter: new Adapter() });

describe('seedsData', () => {
  test('it should retrieve seeded data', () => (
    dbQuery.queryDB('select * from restaurant where id = $1', 175)
      .then((result) => {
        expect(result[0]).toBeDefined();
      })
  ));
});

describe('queryDB', () => {
  test('it should return an empty result for nonExistant data', () => (
    dbQuery.queryDB('select * from restaurant where id = ($1)', 370)
      .then((res) => {
        expect(res[0]).toBeUndefined();
      })
  ));

  test('it should return a title and map property', () => (
    dbQuery.queryDB('select * from restaurant where id = $1', 180)
      .then((res) => {
        expect(res[0].id).toBe(180);
      })
      .catch((err) => { throw new Error(err); })
  ));

  it('returns an error for a bad post value', () => (
    dbQuery.postDB('insert into restaurant things', [])
      .catch((err) => {
        expect(err).toBeTruthy();
      })
  ));
  it('successfully posts types to the db', () => (
    dbQuery.postDB('insert into types (type) values ($1)', ['malaysian'])
      .then((data) => {
        expect(data).toHaveProperty('command');
      }).catch((err) => {
        expect(err).toBeNull();
      }).then(() => {
        client.end();
      })
  ));
});
