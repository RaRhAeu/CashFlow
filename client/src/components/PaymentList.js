import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class PaymentList extends Component{
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const payments = this.props.payments;
    if(payments.length === 0) {
      return (
        <div>There is no need to settle debts, due to lack of any expenses!</div>
      )
    } else {
      return(
        <div>
          <h2 className="heading">How to settle all debts?</h2>
          <ListGroup>
            {payments.map((el, i) =>
              <ListGroupItem key={i}>
                {el.from} pays {el.amount} PLN to {el.to}
              </ListGroupItem>
            )}
          </ListGroup>
        </div>
      )
    }
  };
}

export default PaymentList;
