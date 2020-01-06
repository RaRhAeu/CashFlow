import React, { Component } from 'react';



class Test extends Component {

  render() {
    return(
      <div>
        {this.props.location.pathname.split('/')[2]}
      </div>
    )
  }
}

export default Test;
