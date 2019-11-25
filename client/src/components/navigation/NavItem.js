import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
  render() {

    return(
      <li className="nav-item">
            <NavLink exact to={this.props.to}>
              {this.props.text}
            </NavLink>
      </li>
    )
  }
}

export default NavItem;
