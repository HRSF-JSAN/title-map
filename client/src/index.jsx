import React from 'react';
import ReactDOM from 'react-dom';
import { getDummyTitle, getDummyMaps } from './http-helpers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      maps: [],
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.getDummyData();
  }

  getDummyData() {
    getDummyTitle((err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      this.setState({ titles: data });
    });
    getDummyMaps((error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      this.setState({ maps: result });
    });
  }


  render() {
    return (
      <div>
        Hello React
      </div>
    );
  };
}

// ReactDOM.render(<App />, document.getElementById('app'));
