import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const dbQuery = require('../db/dbQuery.js');

configure({ adapter: new Adapter() });
jest.setTimeout(15000);

describe('seedsData', () => {
  test('it should retrieve seeded data', () => {
    dbQuery.queryDB('select * from title', (err, result) => {
      if (err) {
        throw new Error(err);
      }
      expect(result.exists()).toBe('true');
      expect(result.type()).toBe('object');
    });
  });
});
console.log(process.env.POSTGRES_HOST, process.env.POSTGRES_USER, process.env.POSTGRES_PW, process.env.POSTGRES_PORT, process.env.POSTGRES_DB)
describe('queryDB', () => {
  test('it should return an empty result for nonExistant data', () => (
    dbQuery.queryDB('select * from restaurant where id = ($1)', 370)
      .then((res) => {
        expect(res[0]).toBeUndefined();
      })
  ));

  test('it should return a title, map and types property', () => (
    dbQuery.queryDB('select * from restaurant where id = $1', 180)
      .then((res) => {
        expect(res[1].length).toBeGreaterThan(0);
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
      })
  ));
});
