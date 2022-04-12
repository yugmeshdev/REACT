import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yug",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Yug ",
      });
    }, 2000);
  }
  render() {
    console.log("inside parent component");
    return (
      <div>
        ParentComp
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
