import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

class ExpenseList extends Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const expenses = this.props.expenses;
    if(expenses.length === 0) {
      return (
        <div>No expenses yet, start by adding some.</div>
      )
    } else {
      return(
        <ListGroup>
          {expenses.map((el,i) =>
            <ListGroupItem key={el._id}>
              <div>
                {el.who} paid {el.amount} PLN for {el.whatfor}
                <Button outline className="float-right" color="danger" onClick={() => {
                  this.props.onRemove(el._id)}}>&times;</Button>
              </div>
            </ListGroupItem>
          )}
        </ListGroup>
      )
    }
  };
}

export default ExpenseList;
