import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import MapView from '../client/src/components/MapView';
import Title from '../client/src/components/Title';
import Stars from '../client/src/components/Stars';
import App from '../client/src/index';

configure({ adapter: new Adapter() });

describe('App render', () => {
  test('App component should be stateful', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('title')).toHaveProperty('title');
  });
});

describe('MapComponent render', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(<MapView map={
            {
            id: 30,
            address: '51052 Roob Forge West Chesley Utah, 11729-3188',
            image: 'http://lorempixel.com/640/480',
            phonenumber: '942-284-4906',
            id_restaurant: 130,
            }
          }
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Title Component render', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(<Title
        title={
            {
              id: 130,
              title: 'Nienow, Bradtke and Hills',
              numStars: 4,
              price: '$$$$',
            }
          }
        types={['Indian']}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Stars Component render', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(<Stars numstars={4} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
