import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './app/pages/Homepage.jsx';
import Menu from './app/pages/Menu.jsx';
import Login from './app/pages/Login.jsx';
import Admin from './app/pages/Admin.jsx';
import Edit from './app/pages/Edit.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/menu' component={Menu}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/admin/edit' component={Edit}/>
        </div>
      </Router>
    )
  }
};

export default App;
