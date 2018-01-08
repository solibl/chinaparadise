import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './app/pages/Homepage.jsx';
import Menu from './app/pages/Menu.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/menu' component{Menu}/>
        </div>
      </Router>
    )
  }
};

export default App;
