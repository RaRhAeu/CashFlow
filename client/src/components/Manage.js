import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Col
 } from 'reactstrap';
 import PaymentList from './PaymentList';
 import ExpenseList from './ExpenseList';
 import Share from './Share';

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

  dataChange = (event) => {
    const val = event.target.value;
    this.setState({
      [event.target.name]: val
    })
  }
  toggleExpense = () =>{
    this.setState({
      adding: !this.state.adding,
      involved: [],
      allChecked: false
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
    this.toggleExpense();
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
              <Input type="select" name="who" id="who" onChange={this.dataChange}>
                {participants.map((el, i) =>
                  <option key={i} value={el}>{el}</option>
                )}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="whatfor">For what?</Label>
              <Input type="text" name="whatfor" id="whatfor" onChange={this.dataChange} placeholder="Cinema Tickets"/>
            </FormGroup>
            <FormGroup>
              <Label for="amount">How much?</Label>
              <Input type="number" name="amount" id="amount" min="0.01" placeholder="PLN" onChange={this.dataChange}/>
            </FormGroup>

            <Col sm={10}>
              <FormGroup>
                <Label for="chbx">Split between:</Label>
                  <div>
                    <CustomInput type="checkbox" id="chbx" label="All (equally)" onChange={this.allChecked}/>
                      {participants.map((el, i) =>
                        <CustomInput type="checkbox" id={i} value={el} label={el} key={i} onClick={this.checkBoxAdd}/>
                      )}
                  </div>
              </FormGroup>
            </Col>
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
          <ExpenseList expenses={expenses} onRemove={this.removeExpense} />
          <PaymentList payments={payments} />
          <Share />
      </div>
    )
  }
}

export default Manage;
