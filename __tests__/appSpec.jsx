import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import App from '../client/src/index';

configure({ adapter: new Adapter() });

describe('data tests', () => {
  const app = new App();

  test('title and map data should exist', () => {
    app.getRestaurant(() => {
      expect(app.state.titles).toHaveLength(2);
    });
  });

  test('map and title data should have a length of 200', () => {
    app.getRestaurant((err, title, maps) => {
      expect(maps).toHaveLength(200);
      expect(title).toHaveLength(200);
    });
  });

  test('title data should have a title and type property', () => {
    app.getRestaurant((err, title) => {
      expect(title[0].title.exists()).toBe(true);
      expect(title[0].type.exists()).toBe(true);
    });
  });

  test('map data should have an address property', () => {
    app.getRestaurant((err, title, maps) => {
      expect(maps[0].address.exists()).toBe(true);
    });
  });
});
