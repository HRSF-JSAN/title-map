import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

const Title = ({ title }) => (
  <div>
    <div className="title">{title.title}</div>
    <Stars numStars={title.numStars} />
  </div>
);

Title.propTypes = {
  title: PropTypes.shape({
    numStars: PropTypes.number,
    price: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Title;
