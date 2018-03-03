import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Title from './components/Title';
import MapView from './components/MapView';
import Price from './components/Price';
import { getRestaurant } from './http-helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: {
        id: 0,
        title: '',
        numstars: 0,
        price: '',
      },
      types: [],
      map: {
        id: 0,
        address: '',
        image: '',
        phonenumber: '',
        id_restaurant: 0,
      },
    };
  }

  componentWillMount() {
    this.getState(Math.floor((Math.random() * (300 - 101)) + 101));
  }

  getState(id) {
    getRestaurant(id, (err, result) => {
      if (err) {
        throw new Error(err);
      } else {
        this.setState({
          title: result[0],
          types: result[1],
          map: result[2],
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="9" md="10" sm="12" xs="12">
            <Title id="title" title={this.state.title} types={this.state.types} />
          </Col>
        </Row>
        <Row>
          <Col lg="9" md="10" sm="12" xs="12">
            <Price id="price" types={this.state.types} price={this.state.title.price} addNewType={}/>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="5" sm="8" xs="8">
            <MapView id="map" map={this.state.map} />
          </Col>
        </Row>
      </Container>
    );
  }
}

module.exports = App;
