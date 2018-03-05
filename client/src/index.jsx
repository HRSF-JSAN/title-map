import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Title from './components/Title';
import MapView from './components/MapView';
import Price from './components/Price';
import { getRestaurant, postType } from './http-helpers';

class App extends Component {
  constructor(props) {
    super(props);
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

  addNewType(type) {
    postType(this.state.title.id, type, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        this.getState(this.state.title.id);
      }
    });
  }

  render() {
    const { title } = this.state;
    const { map } = this.state;
    const { types } = this.state;
    return (
      <Container>
        <Row>
          <Col lg="9" md="10" sm="12" xs="12">
            <Title id="title" title={title} types={types} />
          </Col>
        </Row>
        <Row>
          <Col lg="9" md="10" sm="12" xs="12">
            <Price
              id="price"
              types={types}
              price={title.price}
              addNewType={type => this.addNewType(type)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="5" sm="8" xs="8">
            <MapView id="map" map={map} />
          </Col>
        </Row>
      </Container>
    );
  }
}

module.exports = App;
