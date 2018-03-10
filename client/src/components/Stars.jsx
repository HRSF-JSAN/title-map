import PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const uniqid = require('uniqid');

const Stars = ({ rating }) => {
  const starNum = [];
  for (let i = 0; i < 5; i += 1) {
    // es lint gave me an error here so I set no-unused-expressions to false in my eslintrc
    // is there a more efficient or better way to add these star components?
    i < rating ? starNum.push(<Star className="redStar star" key={uniqid()} />) :
      starNum.push(<Star className="greyStar star" key={uniqid()} />);
  }
  return (
    <div>
      <div className="starContainer" >
        { starNum }
        <div className="reviewText">3345 reviews</div>
      </div>
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

module.exports = Stars;
