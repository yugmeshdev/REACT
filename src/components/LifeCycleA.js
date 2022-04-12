import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yugmesh",
    };
    console.log("lifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponent Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
    return null;
  }
  handleChange = () => {
    this.setState({
      name: "Komal",
    });
  };
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.handleChange}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
