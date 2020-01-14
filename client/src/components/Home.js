import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Home extends Component {
  render() {
    return(
      <div>
        <div className="mainheading">
          <h1>Welcome to CashFlow</h1>
        </div>
          <p className="mainp">
            Start right now by creating new event!
          </p>

          <div className="mainbutton">
            <Button size="lg" color="success" href="/create">
              Get Started!
            </Button>
          </div>
      </div>

    )
  }
}

export default Home;
