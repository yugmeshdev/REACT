import React, { Component } from "react";

class Counter2 extends Component {
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
    return <div>{this.props.render(this.state.count, this.clickHandler)}</div>;
  }
}

export default Counter2;
