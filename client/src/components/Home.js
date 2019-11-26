import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';


class Home extends Component {
  render() {
    return(
      <Container>
        <h1>What is CashFlow?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi numquam consectetur sapiente inventore totam odio harum veniam commodi blanditiis ab, eaque ut a dolor quod error culpa magni fugit temporibus officiis rem sint? Temporibus aliquam excepturi deserunt a quibusdam in obcaecati, facere error perspiciatis voluptatum, eaque quidem qui rem ipsum!</p>
        <Row>


</Row>
        <Row >
               <Col sm="12" md={{ size: 6, offset: 3 }}>
                 <Button color="primary" size="lg" block>Get started</Button>
               </Col>
             </Row>

      </Container>

    )
  }
}

export default Home;
