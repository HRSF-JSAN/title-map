import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody } from 'reactstrap';
import IosLocation from 'react-icons/lib/io/ios-location';
import IosPhone from 'react-icons/lib/io/ios-telephone';
import IosEdit from 'react-icons/lib/io/edit';
import IosCompass from 'react-icons/lib/io/compass';

const MapView = ({ map }) => (
  <div>
    <Card>
      <CardImg top width="100%" src={map.image} alt="Map image" />
      <CardBody>
        <ul>
          <li>
            <IosLocation className="locationIcon icon" />
            <span className="address cardText">{map.address}</span>
            <IosEdit className="editIcon" />
            <a href="#" className="edit cardText">Edit</a> {/* eslint-disable-line */}
          </li>
          <li>
            <IosPhone className="icon phoneIcon" />
            <span className="phoneNumber cardText">{map.phonenumber}</span>
          </li>
          <li>
            <IosCompass className="icon mapIcon" />
            <a href={`https://maps.google.com/?q=${map.address}`} className="directions cardText">Get Directions</a> {/* eslint-disable-line */}
          </li>
        </ul>
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
