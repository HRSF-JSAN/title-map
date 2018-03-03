import PropTypes from 'prop-types';
import React from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';
import TypeModal from './TypeModal';
import Star from './Star';

const Price = ({ types, price, addNewType }) => {
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
      <div>
        <TypeModal addNewType={addNewType} className="typeModal" />
      </div>
    </div>
  );
};

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
