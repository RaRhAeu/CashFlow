import React, { Component } from 'react';
import logo from '../../static/graph.png';
import { Link } from 'react-router-dom';
import './logo.css'

class Logo extends Component {
  render() {
    return(
      <Link exact to="/">
      <div className="logo">
        <img src={logo} alt="aa"/>
        <span>
          CashFlow
        <div className="underscore"></div>
        </span>
      </div>
    </Link>
    )
  }
}

export default Logo;
