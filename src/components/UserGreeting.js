import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Hello yug</div>;
    // } else {
    //   return  <div>Welcome guest</div>;

    // }
    return this.state.isLoggedIn ? (
      <div>Welcome yug</div>
    ) : (
      <div>Welcome guest</div>
    );
    //short circuit method
    // return this.state.isLoggedIn && <div>Welcome Yug</div>
  }
}

export default UserGreeting;
