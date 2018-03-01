import PropTypes from 'prop-types';
import React from 'react';
import starImage from '../../Assets/star.jpg';

const Star = ({ className }) => (
  <div className={className}>
    <img className="starImage" src={starImage} alt="star img" />
  </div>
);

Star.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Star;
