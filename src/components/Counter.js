import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Count- {this.state.count}</h1>
        <button onClick={() => this.handleClickFive()}>+++</button>
      </div>
    );
  }
  handleClick = () => {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("callback function", this.state.count);
    // });
    this.setState(prevState=>({
        count:prevState.count+1
    }))
    console.log(this.state.count);
  };
  handleClickFive = () => {
    this.handleClick();
    this.handleClick();
    this.handleClick();
    this.handleClick();
    this.handleClick();
  };
}

export default Counter;
