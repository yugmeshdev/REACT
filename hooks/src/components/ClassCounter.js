import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.clickHandler}>Increment count</button>
      </div>
    );
  }
}

export default ClassCounter;
