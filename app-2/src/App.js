import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {

    var foodsTodisplay = this.state.foods.map((e,index) => {
      return (
        <h2 key = {index} >{e}</h2>
      )
    })

    return (
      <div className="App">
        {foodsTodisplay}
      </div>
    );
  }
}

export default App;
