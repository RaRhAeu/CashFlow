import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './message.css'

class About extends Component {
  render() {
      return(
        <div className="mcontent">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae dignissimos, error accusamus voluptatum, tempore aspernatur temporibus esse tenetur itaque rem recusandae odit, nemo velit officiis illum earum laboriosam voluptatibus. Saepe debitis, eveniet natus quod eius totam aliquid explicabo, exercitationem tempore soluta non labore quia odio modi velit delectus doloremque officia recusandae magnam facilis possimus! At voluptate maiores dolore vel similique nulla non sunt cumque eaque. Modi deleniti voluptates excepturi nemo amet non illum molestiae ullam doloremque earum, obcaecati dolore at maxime accusamus, blanditiis nam sit velit ea. Unde nihil sapiente placeat corporis veritatis saepe libero maiores, necessitatibus totam. Perspiciatis sequi sit veritatis libero illum illo id omnis, nisi, voluptatum, modi consequatur dolorem quo nam vel nulla aperiam odio culpa.
          </p>
          <p><Link exact to="/"><span className="active"> GO BACK</span></Link></p>
        </div>
      )
    }
}

export default About;
