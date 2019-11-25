import React, { Component } from 'react';
import logo from '../static/graph.jpg'
import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

class AppNavbar extends Component {
    // this.toggle = this.toggle.bind(this);
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      }
    }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
    <nav>
      <div onClick={this.toggle} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-bar">
        <div className={"logo "+!this.state.isOpen}>
          <logo/>
          <span>LOGO</span>
        </div>
        <ul className={"nav-links " + this.state.isOpen}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/create">Create Event</Link>
          </li>
          <li className="nav-item">
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
    </nav>

  )}
}

export default AppNavbar;
