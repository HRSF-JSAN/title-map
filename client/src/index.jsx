import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Title from './components/Title';
import MapView from './components/MapView';
import Price from './components/Price';
import { getRestaurant, postType } from './http-helpers';

const PropTypes = require('prop-types');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        id: 0,
        title: '',
        rating: 0,
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
      reviews: 0,
    };
  }

  componentDidMount() {
    this.getState(this.props.id);
  }

  getState(id) {
    return getRestaurant(id)
      .then((result) => {
        const address = result[0].data
          ? result[0].data.location.display_address.join(', ')
          : result[1].data[0].address;
        const phonenumber = result[0].data
          ? result[0].data.display_phone
          : result[1].data[0].phonenumber;
        const image = result[0].data
          ? result[0].data.image_url
          : result[1].data[0].image;
        const reviews = result[0].data
          ? result[0].data.review_count
          : 0;
        const map = {
          address,
          phonenumber,
          image,
        };
        this.setState({
          title: result[2].data[0],
          types: result[2].data[1],
          map,
          reviews,
        });
      });
  }

  addNewType(type) {
    postType(this.state.title.id, type, () => {
      this.getState(this.state.title.id);
    });
  }

  render() {
    const { title } = this.state;
    const { map } = this.state;
    const { types } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Title id="title" title={title} types={types} reviews={this.state.reviews} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Price
              id="price"
              types={types}
              price={title.price}
              addNewType={type => this.addNewType(type)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MapView id="map" map={map} />
          </Col>
        </Row>
      </Container>
    );
  }
}

App.propTypes = {
  id: PropTypes.number,
};

App.defaultProps = {
  id: 0,
};

module.exports = App;
