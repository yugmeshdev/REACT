import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.CompRef = React.createRef();
  }
  handleFocus = () => {
    this.CompRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.CompRef} />
        <button onClick={this.handleFocus}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
