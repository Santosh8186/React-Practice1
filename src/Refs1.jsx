import React, { Component,createRef } from 'react'

export default class Refs1 extends Component
 {
    constructor()
    {
        super()
        this.h1ref=createRef(null)
        
    }

  render() 
  {
    return (
      <div>
        <h1 ref={this.h1ref}>hello world</h1>
      </div>
    )
  }
}
