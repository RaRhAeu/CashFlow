import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Test from './Test';
import Home from './Home';
import About from './About';
import Create from './Create';


class Container extends Component {
  render() {
    return(
      <div className="container">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create" component={Create}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/manage/:eventid" component={Test}></Route>
        <Route exact path="/manage/newexpense/:eventid" component={Test}></Route>
      </div>
    )
  }
}

export default Container;
