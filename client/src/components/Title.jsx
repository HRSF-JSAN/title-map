import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

const Title = ({ title }) => (
  <div>
    <div className="title">{title.title}</div>
    <Stars numstars={title.numstars} />
  </div>
);

Title.propTypes = {
  title: PropTypes.shape({
    numstars: PropTypes.number,
    price: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

module.exports = Title;
