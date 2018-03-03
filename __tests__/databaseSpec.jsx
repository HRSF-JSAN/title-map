import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

const App = require('../client/src/index');
const dbQuery = require('../db/dbQuery.js');

configure({ adapter: new Adapter() });

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

describe('queryDB', () => {
  test('it should return an empty result for nonExistant data', () => {
    dbQuery.queryDB('select * from restaurant where id = 370', (err, res) => {
      expect(res.length).toBe(1);
      expect(res[0].title).toBeUndefined();
    });
  });
  test('it should return a title, map and types property', () => {
    dbQuery.queryDB('select * from restaurant where id = $1', [180], (err, res) => {
      expect(res[0][1].length).to.be(1);
    });
  });
  test('it should return data for current elements loaded in state', () => {
    const wrapper = mount(<App />);
    let title = wrapper.state('title');
    dbQuery.queryDB('select * from restaurant where id = $1', [title.id], (err, res) => {
      if (err) {
        throw new Error(err);
      }
      expect(title.numstars).toEqual(res[0].numstars);
    });
  });
  it('returns an error for a bad post value', () => {
    dbQuery.postDB('insert into restaurant things', [])
      .then((data) => {})
      .catch((err) => {
        expect(err).toBeTruthy();
      });
  });
  it('successfully posts types to the db', () => {
    dbQuery.postDB('insert into types (type) values ($1)', ['malaysian'])
      .then((data) => {
        expect(data).toHaveProperty('command');
      }).catch((err) => {
        expect(err).toBeNull();
      });
  });
});
