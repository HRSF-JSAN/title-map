import PropTypes from 'prop-types';
import React from 'react';

const Star = ({ className }) => (
  <div className={className}>
    <img className="starImage" src="https://s3-us-west-1.amazonaws.com/foodigouserphotos/Star.png" alt="star img" />
  </div>
);

Star.propTypes = {
  className: PropTypes.string.isRequired,
};

module.exports = Star;
