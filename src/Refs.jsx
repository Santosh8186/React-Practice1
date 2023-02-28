import React, { Component, createRef } from 'react'

export default class Refs extends Component 
{
    constructor()
    {
        super()
        this.state={company :"Qspiders"}
         this.divref =createRef(null)
         this.btnref =createRef(null)
    }

     changeCompany=()=>{
        this.setState({company:"Jspiders"})
        this.divref.current.style.color="yellow"
        this.divref.current.style.backgroundColor="red"
        this.divref.current.style.padding="10px"
        this.btnref.current.style.color="green"
        this.btnref.current.style.backgroundColor="pink"

     }
  render() {
    return (
      <div>
        <div ref={this.divref}>{this.state.company}</div>
        <button onClick={this.changeCompany} ref={this.btnref}>change</button>
      </div>
    )
  }
}
