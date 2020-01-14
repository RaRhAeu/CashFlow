import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Col
 } from 'reactstrap';

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      isLoaded: false,
      eventId: props.location.pathname.split('/')[2],
      eventName: '',
      expenses: [],
      involved: [],
      allChecked: false
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }
  fetchData = () => {
    const eventurl = `/api/events/${this.state.eventId}`;
    const expurl = `/api/expenses/${this.state.eventId}`;
    const payurl = `/api/payments/${this.state.eventId}`;
    axios.get(eventurl)
      .then(response => {
        this.setState({
          eventName: response.data.name,
          participants: response.data.participants,
          who: response.data.participants[0]
        });
        axios.get(expurl)
          .then(response => {
            this.setState({
              expenses: response.data
            });
            axios.get(payurl)
              .then(response => {
                console.log(response);
                this.setState({
                  isLoaded: true,
                  payments: response.data
                })
            }).catch(err => console.log(err));
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));

  }
  componentDidMount() {
    this.fetchData();
  }
  whatFor = (e) => {
    this.setState({
      whatfor: e.target.value
    })
  }
  whoName = (e) => {
    this.setState({
      who: e.target.value
    })
  }
  amount = (e) => {
    this.setState({
      amount: e.target.value
    })
  }
  toggleExpense = () =>{
    this.setState({
      adding: !this.state.adding
    })
  }
  checkBoxAdd = (e) => {
    this.setState({
      involved: [...this.state.involved, e.target.value]
    })
  }
  allChecked = (e) => {
    this.setState({
      allChecked: !this.state.allChecked
    })
  }
  addExpense = () => {
    this.setState({
      adding: !this.state.adding
    })
    const posturl = "/api/expenses/";
    let involved = [];
    if(this.state.allChecked) {
      involved = this.state.participants;
    } else {
      involved = this.state.involved;
    }
    const data = {
      eventID: this.state.eventId,
      who: this.state.who,
      amount: parseFloat(this.state.amount),
      whatfor: this.state.whatfor,
      involved: involved
    }
    this.setState({
      involved: [],
      allChecked: false
    })
    axios.post(posturl, data)
      .then(res => {
        this.fetchData();
      })
  }
  removeExpense = (id) => {
    const delurl = `/api/expenses/${id}`;
    axios.delete(delurl)
    .then(res => {
      this.setState({
        isLoaded: false
      })
      this.fetchData();
    }).catch(err => console.log(err));
  }

  render(){
    const {isLoaded, participants, eventName, expenses, adding, payments} = this.state;
    if (!isLoaded){
      return(<div>Loading...</div>)
    } else if (adding) {
      return(
        <div>
          <Form>
            <FormGroup>
              <Label for="who" >Who paid?</Label>
              <Input type="select" name="who" id="who" onChange={this.whoName}>
                {participants.map((el, i) =>
                  <option key={i} value={el}>{el}</option>
                )}
            </Input>
            </FormGroup>
            <FormGroup>
              <Label for="whatfor">For what?</Label>
              <Input type="text" name="whatfor" id="whatfor" onChange={this.whatFor} placeholder="Cinema Tickets"/>
            </FormGroup>
            <FormGroup>
              <Label for="amount">How much?</Label>
              <Input type="number" name="amount" id="amount" min="0.01" placeholder="PLN" onChange={this.amount}/>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <legend className="col-form-label col-sm-2">Split between:</legend>
            <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="all" onChange={this.allChecked}/>{' '}All
              </Label>
            </FormGroup>
              {participants.map((el, i) =>
                <FormGroup check key={i}>
                  <Label check>
                    <Input type="checkbox" onClick={this.checkBoxAdd} value={el} name={"person"+i}/>{'' + el}
                  </Label>
                </FormGroup>
              )}
            </Col>
          </FormGroup>

          </Form>
          <Button outline className="float-right" onClick={this.addExpense}>Submit</Button>
        </div>
      )
    }

    return (
      <div>
        <h1 className="heading">{eventName}</h1>
        <h2>Expenses:
          <Button outline color="success" className="float-right" onClick={this.toggleExpense}>Add Expense</Button>
        </h2>

        <div>
          <ListGroup>
            {expenses.map((el,i) =>
              <ListGroupItem key={el._id}>
                <div>
                  {el.who} paid {el.amount} PLN for {el.whatfor}
                  <Button outline className="float-right" color="danger" onClick={() => {
                    this.removeExpense(el._id)}}>&times;</Button>
                </div>
              </ListGroupItem>
            )}

          </ListGroup>
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

        </div>

      </div>
    )
  }
}

export default Manage;
