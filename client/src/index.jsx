import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Title from './components/Title';
import MapView from './components/MapView';
import Price from './components/Price';
import ajax from './ajax';

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
      reviews: 359,
    };
  }

  componentDidMount() {
    this.getState(this.props.id);
  }

  getState(id) { /*eslint-disable-line*/
    ajax.getTitle(this.props.id, (err, res) => {
      if (err) {
        console.log(err); /*eslint-disable-line*/
      } else {
        this.setState({
          title: res[0],
          type: res[1], /*eslint-disable-line*/
        });
      }
    });
    ajax.getAddress(this.props.id, (err, res) => {
      if (err) {
        console.log(err); /*eslint-disable-line*/
      } else {
        this.setState({
          map: res[0],
        });
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
  id: 10,
};

module.exports = App;
