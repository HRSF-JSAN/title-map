import PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const Price = ({ types, price }) => {
  return (
    <div className="price">
      <div id="price">
        {price}
      </div>
      <div>
      •
      </div>
      <div id="types">
      { types ? types.map(i => <a href ="#">{i}</a>) : '' } {/* eslint-disable-line */}
      </div>
    </div>
  );
};

Price.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
};

module.exports = Price;
