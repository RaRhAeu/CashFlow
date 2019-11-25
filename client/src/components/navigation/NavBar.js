import React, { Component } from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import NavItem from './NavItem';
import SearchItem from './SearchItem';
import './navbar.css';


class AppNavbar extends Component {

  render() {
    return (
    <nav>
      <Hamburger />
      <div className="nav-bar">
        <Logo />
        <ul className="nav-links ">
          <NavItem to="/" text="Home"/>
          <NavItem to="/create" text="Create Event"/>
          <NavItem to="/about" text="About"/>
          <SearchItem />
        </ul>
      </div>
    </nav>

  )}
}

export default AppNavbar;
