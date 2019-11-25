import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainButton extends Component {
  render() {
    return(
      <Link to="/create">
        <button className="mainbtn"><span>Get Started!</span></button>
      </Link>
    )
  }
}

export default MainButton;
