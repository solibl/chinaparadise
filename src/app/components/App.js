import React, { Component } from 'react';
import logo from '../../app/images/logo/CPRlogo.png';
import './App.css';

import Navigation from './Navigation';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <header>
            <a href=''><img src={logo} className="App-logo" /></a>
          </header>
          <Navigation />
        </div>
        <div className="Body-content">
          <Homepage />
        </div>
      </div>
    );
  }
}

export default App;
