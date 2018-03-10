import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

const Title = ({ title }) => (
  <div>
    <div className="title">{title.title}</div>
    <Stars rating={title.rating} />
  </div>
);

Title.propTypes = {
  title: PropTypes.shape({
    rating: PropTypes.number,
    price: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

module.exports = Title;
