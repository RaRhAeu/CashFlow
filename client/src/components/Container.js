import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Test from './container/Test';
import Home from './container/Home';
import About from './container/About';


class Container extends Component {
  render() {
    return(
      <div className="container">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create" component={Test}></Route>
        <Route exact path="/about" component={About}></Route>
      </div>
    )
  }
}

export default Container;
