import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name,heroName}=this.props;
    //for state destructing 
    //const {state1,state2}=this.state
    return <h1>wELCOME {name} aka {heroName}</h1>;
  }
}

export default Welcome;
