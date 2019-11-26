import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Create extends Component {
  render() {
    return(
      <div>
        <Container>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
     <FormGroup>
       <Label for="exampleEmail">Event name</Label>
       <Input name="eventname" id="exampleEmail" placeholder="Ski Trip" />
     </FormGroup>
     <FormGroup>
       <Label for="exampleEmail">Person 1</Label>
       <Input name="eventname" id="exampleEmail" placeholder="Your name" />
     </FormGroup>
     <FormGroup>
       <Label for="exampleEmail">Person 3</Label>
       <Input name="eventname" id="exampleEmail" placeholder="Ski Trip" />
     </FormGroup>


    <Row>
      <Col xs="6" sm="4"><Button>+ Add Person</Button></Col>
      <Col xs="6" ><Button color="primary" size="lg" block>Submit</Button></Col>


    </Row>

   </Form>
</Col>
        </Container>
      </div>
    )
  }
}

export default Create;
