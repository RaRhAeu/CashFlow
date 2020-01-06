import React, { Component } from 'react';
import { Button } from 'reactstrap';


class About extends Component {
  render() {
    return(
      <div>
        <div className="heading">
          <h1>What is CashFlow?</h1>
        </div>

        <p className="about-p">
          CashFlow is simple app that makes managing expenses easier.
          Imagine you went to a party with your friends and you paid for pizza,
          but someone else paid for coke. Now you need to adjust your finances.
          CashFlow calculates the optimal way to do that. Simply create new event,
          add expenses, and get your payment schedule!
        </p>
        <div className="mainbutton">
          <Button size="lg" color="success" href="/create">
            Start Now!
          </Button>
        </div>
      </div>
    )
  }
}

export default About;
