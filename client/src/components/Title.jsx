import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

const Title = ({ title, reviews }) => (
  <div>
    <div className="title">{title.title}</div>
    <Stars rating={title.rating} reviews={reviews} />
  </div>
);

Title.propTypes = {
  title: PropTypes.shape({
    rating: PropTypes.number,
    price: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  reviews: PropTypes.number.isRequired,
};

module.exports = Title;
