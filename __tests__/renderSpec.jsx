import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { App } from '../client/src/index';

configure({ adapter: new Adapter() });

describe('render tests', () => {
  test('App component should correctly render elements to the DOM', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual('Hello React');
  });
});
