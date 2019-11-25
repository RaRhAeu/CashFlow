import React, { Component } from 'react';
import './hamburger.css';


class Hamburger extends Component {
  render() {
    return(
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    )
  }
}


export default Hamburger;
