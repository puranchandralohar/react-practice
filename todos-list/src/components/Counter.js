import React, { Component } from 'react';


export class Counter extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            count:0,
        };
    }


    increment = ()=>{
        this.state+1;
    }

    render() {
    return (
    <>
      <button onClick={this.increment}></button>
      <button></button>
    </>
    )
  }
}
