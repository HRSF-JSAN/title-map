import React from 'react';
import { getDummyTitle, getDummyMaps } from './http-helpers';

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
    getDummyTitle((err, data) => {
      this.setState({ titles: data });
    });
    getDummyMaps((error, result) => {
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

export default { App };
