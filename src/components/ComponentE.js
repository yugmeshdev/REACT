import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}
ComponentE.contextType = UserContext; ///another way static contextTyoe =UserContext just above render

export default ComponentE;
