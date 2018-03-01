import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { getTitle, getAddress } from './http-helpers';
import MapView from './components/MapView';
import Title from './components/Title';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: {
        id: 130,
        title: 'Nienow, Bradtke and Hills',
        numStars: 2,
        price: '$$$$',
      },
      types: ['Indian'],
      map: {
        id: 30,
        address: '51052 Roob Forge West Chesley Utah, 11729-3188',
        image: 'http://lorempixel.com/640/480',
        phonenumber: '942-284-4906',
        id_restaurant: 130,
      },
    };
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant(id) {
    getTitle(id, (err, data) => {
      // this.setState({ title: data });
    });
    getAddress(id, (error, result) => {
      // this.setState({ map: result });
    });
  }


  render() {
    return (
      <Container>
        <Row>
          <Col sm="9">
            <Title title={this.state.title} types={this.state.types} />
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <MapView map={this.state.map} />
          </Col>
        </Row>
      </Container>
    );
  }
}

module.exports = App;
