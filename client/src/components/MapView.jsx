import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg,
  CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import IoIosLocation from 'react-icons/lib/io/ios-location';

const MapView = ({ map }) => (
  <div>
    <Card>
      <CardImg top width="100%" src={map.image} alt="Map image" />
      <CardBody>
        <div className="cardTitle">
          <IoIosLocation />
          <CardTitle>{map.address}</CardTitle>
        </div>
        <CardSubtitle>{map.phonenumber}</CardSubtitle>
        {/* <link href={`https://maps.google.com/?q=${map.address}`}>Get Directions</link> */}
      </CardBody>
    </Card>
  </div>
);

MapView.propTypes = {
  map: PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    image: PropTypes.string,
    phonenumber: PropTypes.string,
    id_restaurant: PropTypes.number,
  }).isRequired,
};

export default MapView;
