import PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const Stars = ({ numStars }) => {
  const starNum = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < numStars) {
      starNum.push(<Star className="redStar star" />);
    } else {
      starNum.push(<Star className="greyStar star" />);
    }
  }
  return (
    <div>
      <div className="starContainer" >
        { starNum }
        <div className="reviewText">{ ` ${Math.floor(Math.random() * ((10000 - 1) + 1))} reviews `}</div>
      </div>
    </div>
  );
};

Stars.propTypes = {
  numStars: PropTypes.number.isRequired,
};

module.exports = Stars;
