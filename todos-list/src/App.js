// import ExpenseItem from './components/ExpenceItem';

// function App(){
//     return(
//         <div>
//         <h2>Let's get Started</h2>
//         <ExpenseItem></ExpenseItem>

//         </div>
//     );
// }


import React, { Component } from 'react'
import { Counter } from './components/Counter.js';

export class App extends Component {
  render() {
    return (
      <Counter/>
    )
  }
}