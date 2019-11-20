import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import CreateEvent from './CreateEvent';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import {
  Route,
  HashRouter
} from 'react-router-dom';

class AppNavbar extends Component {
    // this.toggle = this.toggle.bind(this);
    state = {
      isOpen: false
    }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <HashRouter>
      <Navbar color="light" light expand="md" className="navbar-inverse">
          <Container>
          <NavbarBrand href="/">
            <div >CashFlow</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem className="nav-link">
                  <NavLink href="#/">Home</NavLink>
              </NavItem>
              <NavItem className="nav-link">
                  <NavLink href="#/about">About</NavLink>
            </NavItem>
              <NavItem className="nav-link">
                  <NavLink href="#/create">Create Event</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
          </Container>


      </Navbar>
      <Container>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/create" component={CreateEvent}/>
        </div>
      </Container>

    </HashRouter>

  )}
}


export default AppNavbar;
