import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Create extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pnumber: 0,
      toManage: false
    }
  }

  addPerson = () => {
    this.setState({
      pnumber: this.state.pnumber + 1
    })
  }

  createEvent = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.eventName,
      participants: []
    }
    for(let i=0; i<=this.state.pnumber; i++) {
      let person = this.state[`person${i}`];
      if (person !== undefined) {
        data.participants.push(person)
      }
    }
    // console.log(data);
    const url = '/api/events'
    axios.post(url, data)
      .then(response => {
        // console.log(response);
        this.setState({
          toManage: true,
          eventId: response.data._id
        })
      })
      .catch(err => console.log(err));
  }

  changeNames = (event) => {
    let val = event.target.value;
    this.setState({
      [event.target.name]: val
    })
  }

  render() {
    if (this.state.toManage === true) {
      return <Redirect to={"/manage/"+this.state.eventId}/>
    }
    return(
        <div className="create-m">
          <h1>New Event</h1>
          <Form>
            <FormGroup>
              <Label for="eventName" >Event Name:</Label>
              <Input type="text" name="eventName" id="eventName" placeholder="Ski Trip" onChange={this.changeNames}/>
            </FormGroup>
            <FormGroup>
              <Label for="person0">Participants</Label>
              <Input type="text" name="person0" id="person0" placeholder="Your name" onChange={this.changeNames}/>
            </FormGroup>
            {[...Array(this.state.pnumber)].map((n,i) =>
              <FormGroup key={i}>
                <Input type="text" id={"person"+(i+1)} name={"person"+(i+1)} placeholder={"person "+(i+1)} onChange={this.changeNames} />
              </FormGroup>
            )}
            <FormGroup>
              <Button onClick={this.addPerson}>+ Add person</Button>{' '}
              <Button onClick={this.createEvent} className="float-right" size="lg" color="primary">Submit</Button>{' '}
            </FormGroup>
          </Form>
        </div>
    )
  }
}

export default Create;
