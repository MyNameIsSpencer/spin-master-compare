import React, { Component } from 'react';
import './App.css';

const API_KEY = '9GR1NJ63OZUJXWYA';

class App extends Component {
  render() {
    return (
      <div>
        https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo
      </div>
    );
  }
}

export default App;
