import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYKfOol1Qmt8vOWWuLs9Ks1mnfMibT2S4_VLixse8sSgRZQAgYA" } />
      </div>
    );
  }
}

export default App;
