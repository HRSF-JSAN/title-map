import PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const Stars = ({ numstars }) => {
  const starNum = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < numstars) {
      starNum.push(<Star className="redStar star" key={i + 375} />);
    } else {
      starNum.push(<Star className="greyStar star" key={i + 375} />);
    }
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
  numstars: PropTypes.number,
};

Stars.defaultProps = {
  numstars: 1,
};

module.exports = Stars;
