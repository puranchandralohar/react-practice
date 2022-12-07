import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementing, decrementing } from '../Features/CounterSlice';

// import Button from '@mui/material'
import Button from '@mui/material/Button';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


  return (
    <div>
        <h1>Counter</h1>
        <div className="app flex">
            <Button variant="contained" onClick={()=>dispatch(incrementing())}>+</Button>
            <span>{count}</span>
            <Button variant= "outlined" onClick={()=>dispatch(decrementing())}>-</Button>
        </div>
    </div>
  )
}
