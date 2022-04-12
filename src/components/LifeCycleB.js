import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yugmesh",
    };
    console.log("lifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponent Update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
    return null;
  }
  render() {
    console.log("LifecycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
