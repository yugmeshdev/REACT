import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParentInput extends Component {
  render() {
    return (
      <div>
          <FRInput />
          <button>Focus input</button>
      </div>
    )
  }
}

export default FRParentInput