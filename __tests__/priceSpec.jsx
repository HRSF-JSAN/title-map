import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, mount } from 'enzyme';
import Price from '../client/src/components/Price';

configure({ adapter: new Adapter() });

describe('<Price />', () => {
  const price = mount(<Price />);
  test('price should render correctly price and type divs', () => {
    const priceDiv = price.find('#price');
    expect(priceDiv).toHaveLength(1);
  });
  test('types should render correctly with a length', () => {
    const types = price.find('#types');
    expect(types).toHaveLength(1);
  });
});
