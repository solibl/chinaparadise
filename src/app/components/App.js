import React, { Component } from 'react';
import logo from '../../app/images/logo/CPRlogo.png';
import './App.css';

import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <header>
          <a href=''><img src={logo} className="App-logo" /></a>
        </header>
        <Navigation />
      </div>
    );
  }
}

export default App;
