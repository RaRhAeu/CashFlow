import React, { Component } from 'react';
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


class AppNavBar extends Component {
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
    return(
      <div>
            <Navbar color="dark" className="n" dark expand="md">
              <Container>
              <NavbarBrand href="/">CashFlow</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="navbar-nav ml-auto " navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/create">Create Event</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>


                </Nav>

              </Collapse>
            </Container>
            </Navbar>
          </div>
    );
  }
}

export default AppNavBar;
