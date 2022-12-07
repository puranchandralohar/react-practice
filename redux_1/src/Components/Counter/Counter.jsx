import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementing, decrementing } from '../Features/CounterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter</h1>
        <div className="app">
            <button onClick={()=>dispatch(incrementing())}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(decrementing())}>-</button>
        </div>
    </div>
  )
}
