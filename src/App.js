import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './app/pages/Homepage.jsx';
import Menu from './app/pages/Menu.jsx';
import Login from './app/pages/Login.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/menu' component={Menu}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </Router>
    )
  }
};

export default App;
