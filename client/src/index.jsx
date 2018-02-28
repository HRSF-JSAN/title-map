import React, { Component } from 'react';
import { getTitle, getAddress } from './http-helpers';
import { Map } from './components/Map';
import { Title } from './components/Title';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: {
        id:130,
        title:"Nienow, Bradtke and Hills",
        numstars:2,
        price:"$$$$"
      },
      types: ["Indian"],
      map: {
      "id":30,
      "address":"51052 Roob Forge West Chesley Utah, 11729-3188",
      "image":"http://lorempixel.com/640/480",
      "phonenumber":"942-284-4906",
      "id_restaurant":130
      },
    };
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant(id) {
    getTitle(id, (err, data) => {
      this.setState({ titles: data });
    });
    getAddress(id, (error, result) => {
      this.setState({ maps: result });
    });
  }


  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <Map map={this.state.map} />
      </div>
    );
  }
}

module.exports = App;
