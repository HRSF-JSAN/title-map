import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Adapter } from 'enzyme-adapter-react-16';
import App from '../client/src/index';

// test('')
// configure({ adapter: new Adapter() });

// .toBe(value)
//.toHaveLength(number)
// test('mentions grapefruit', () => {
  // expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
// })
describe('data tests', () => {
  test('map data should have a length of 200', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().maps.toHaveLength(200));
  });
});
// const 