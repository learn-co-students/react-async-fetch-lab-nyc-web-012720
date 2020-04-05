// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    store: [],
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then((response) => response.json())
      .then((store) => this.setState({ store }));
  }
  render() {
    <div>{this.state.store}</div>;
  }
}
