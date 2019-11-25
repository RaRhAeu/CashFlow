import React, { Component } from 'react';
import Welcome from './Welcome';
import MainButton from './MainButton';


class Home extends Component {
  render() {
    return(
      <div className="home">
      <Welcome />
      <MainButton />
    </div>
    )
  }
}

export default Home;
