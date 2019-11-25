import React, { Component } from 'react';
import MainButton from './MainButton';
import MainText from './MainText';


class Main extends Component {
  render() {
    return(
      <div className="container">
        <MainText />
        <MainButton />
      </div>
    )
  }
}

export default Main;
