import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Create from './Create';
import Manage from './Manage';

class Container extends Component {
  render() {
    return(
      <div className="container">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create" component={Create}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/manage/:eventid" component={Manage}></Route>
      </div>
    )
  }
}

export default Container;
