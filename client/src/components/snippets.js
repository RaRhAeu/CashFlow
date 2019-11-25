"proxy": "http://127.0.0.1:5000",

// App navbar
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import CreateEvent from './CreateEvent';
import EventManager from './EventManager';
import Search from './Search';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import {
  Route,
  BrowserRouter as Router,
  Link
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
    <Router>
      <Navbar color="light" light expand="md" className="navbar-inverse">
          <Container>
          <NavbarBrand href="/">
            <div >CashFlow</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                  <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
                  <Link className="nav-link" to="/create">Create Event</Link>
            </NavItem>
            <NavItem>
              <Search />
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
          <Route exact path="/manage/:eventname" component={EventManager}/>
        </div>
      </Container>

    </Router>

  )}
}


export default AppNavbar;



//
<div className="navbar">
  <div className="nav-item nav-left">
    <Link className="nav-link" to="/">
      <span>LOGO</span>
    </Link>
  </div>
<div className="nav-right">
    <div className="nav-item">
      <Link className="nav-link active" to="/">
        <span>Home</span>
      </Link>
    </div>
    <div className="nav-item">
      <Link className="nav-link" to="/create">
        <span>Create Event</span>
      </Link>
    </div>
    <div className="nav-item">
      <Link className="nav-link" to="/about">
        <span>About</span>
      </Link>
    </div>
    <div className="nav-item">
      <Link className="nav-link" to="/about">
        <span>About</span>
      </Link>
    </div>
  </div>
</div>
