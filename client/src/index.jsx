import React from 'react';
import ReactDOM from 'react-dom';
import getDummyTitle from './http-helpers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  getDummyData() {
    getDummyTitle( (err, data) => {
      if (err) console.log(err);
      console.log(data)
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getDummyData()}/>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));

const titleShape = {
  title: '', // Tacos El Paisa
  type: '', //Mexican
  price: '', //$$
  numStars: 0,
}

const mapShape = {
  address: '',
  image: 'file/at/this/path.png',
  phoneNumber: '',
}

