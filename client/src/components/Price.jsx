import PropTypes from 'prop-types';
import React from 'react';
import TypeModal from './TypeModal';

const uniqid = require('uniqid');

const Price = ({
  types,
  price,
  addNewType,
}) => (
  <div className="price">
    <div id="price">
      {price}
    </div>
    <div>
    •
    </div>
    <div id="types">
      {/* effort to get a unique key for each new component */}
      { types.map((i, idx) => <a href ="#" key={uniqid()}>{i}</a>) }{/* eslint-disable-line*/}
    </div>
    <div>
      <TypeModal addNewType={addNewType} className="typeModal" />
    </div>
  </div>
);

Price.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  addNewType: PropTypes.func,
};

Price.defaultProps = {
  types: [],
  price: '',
  addNewType: () => {},
};

module.exports = Price;
