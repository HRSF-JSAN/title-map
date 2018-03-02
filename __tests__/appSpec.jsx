import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, mount } from 'enzyme';
import App from '../client/src/index';

configure({ adapter: new Adapter() });

describe('<App /> Dom Rendering', () => {
  const app = mount(<App />);
  test('app should render correctly with state', () => {
    const appState = app.state('title');
    expect(appState).toHaveProperty('title');
  });
  test('title should render correctly with a length', () => {
    const title = app.find('#title');
    expect(title).toHaveLength(1);
  });
  test('map data should render correctly with a length', () => {
    const maps = app.find('#map');
    expect(maps).toHaveLength(1);
  });
  test('map data should have an address property', () => {
    const maps = app.find('#map');
    expect(maps).toHaveLength(1);
  });
});
