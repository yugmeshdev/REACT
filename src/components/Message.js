import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitors",
    };
  }
  render() {
    return(
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={()=>this.handleClick()}>Subscribe</button>
    </div>);
  }
   handleClick=()=>{
    this.setState({
        message:'Thanks for subscribe'
    })
  }
}

export default Message;
