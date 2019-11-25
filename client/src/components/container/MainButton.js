import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './mainbtn.css';

class MainButton extends Component {
  render() {
    return(
      <NavLink to="/create">
        <button className="mainbtn">

          <span>Get Started!</span>

        </button>
      </NavLink>
    )
  }
}

export default MainButton;
