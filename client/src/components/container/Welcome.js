import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './message.css'

class Welcome extends Component {
  render() {
      return(
        <div className="mcontent">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi assumenda praesentium reiciendis deleniti esse aspernatur quam maxime debitis vero sunt similique accusamus voluptatibus, quae tempora! Veniam rerum asperiores excepturi neque optio vero, officia esse earum unde exercitationem
          <Link exact to="/about"><span className="active"> voluptatibus quam.</span></Link></p>
        </div>
      )
    }
}

export default Welcome;
