import React, { Component } from 'react'
import "../App.css"

export class Count extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:"Counter",
            plus:"+",
            minus:"-",
            count:0,
        };
    }

    countIncrement = () =>{
        this.setState((prev)=>({
            count:prev.count + 1,
        }))
    }

    countDecrement = () =>{
        this.setState((prev)=>({
            count:prev.count - 1,
        }))
    }

  render() {
    return (
        <div className='container'>
            <h1>{this.state.name}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.countIncrement}>{this.state.plus}</button>
            <button onClick={this.countDecrement}>{this.state.minus}</button>
        </div>
    )
  }
}
