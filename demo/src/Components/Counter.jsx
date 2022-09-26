import React from 'react';
import { useState } from 'react';
import './Style.css';

export function Counter() {
    const [ count , setCount ]= useState(0);

  return (
    <div className='wrapper'>
        <h1>Counter</h1>
        <h1>{ count }</h1>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
  )
}

