import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import App from '../client/src/index';

configure({ adapter: new Adapter() });

describe('App Component tests', () => {
  const app = new App();
  test('title and map data should exis and have a length of 2', () => {
    app.getState(202, (err, result) => {
      if (err) {
        throw new Error(err);
      }
      expect(result.exitst()).toBe('true');
    });
  });
  test('title data should have a title and type property', () => {
    app.getState(202, (err, result) => {
      if (err) {
        throw new Error(err);
      }
      expect(result.exitst()).toBe('true');
    });
  });
  test('map data should have an address property', () => {
    app.getState((err, title, maps) => {
      expect(maps[0].address.exists()).toBe(true);
    });
  });
});
