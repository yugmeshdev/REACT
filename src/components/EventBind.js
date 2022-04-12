import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.handlerL=this.handlerL.bind(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.handlerL.bind(this)}>Clicked</button>  performance replication*/}
        {/* <button onClick={()=>this.handlerL()}>Clicked</button> */}
        <button onClick={this.handlerL}>Clicked</button>
     
      </div>
    );
  }

  //arrow function can setState ordinary cant thats why used bind(this)
  handlerL() {
    this.setState({
      message: "welcome",
    });
  }
}

export default EventBind;
