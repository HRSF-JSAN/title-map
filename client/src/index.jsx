import React from 'react';
import { getTitle, getAddress } from './http-helpers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      maps: [],
    };
  }

  componentDidMount() {
    this.getDummyData();
  }

  getDummyData() {
    getTitle(101, (err, data) => {
      this.setState({ titles: data });
    });
    getAddress(101, (error, result) => {
      this.setState({ maps: result });
    });
  }


  render() {
    return (
      <div>
        Hello React
      </div>
    );
  }
}

module.exports = App;
