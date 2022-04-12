import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("inside RegComp component");
    return <div>RegCom {this.props.name}</div>;
  }
}

export default RegComp;
