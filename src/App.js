import React, { Component } from 'react';
import Graph from './components/Graph.js';
import Legend from './containers/Legend.js';
import './App.css';

const API_KEY = '9GR1NJ63OZUJXWYA';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo

        <Graph />
        <br />
        <br />
        <Legend />
      </div>
    );
  }
}

export default App;
