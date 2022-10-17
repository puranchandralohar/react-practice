import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count , setCount] = useState(0)
    const [btn, setBtn] = useState('Increase')

    useEffect(()=>{
      if(count === 10){
        setBtn('Decrease')
        
      }
      if(count === 0){
        setBtn('Increase')
      }

    },[count])

    const handleClick=()=>{
      setCount(btn === 'Increase' ? count + 1 : count - 2)
    }



  return (
    <>
        <div className="counter_app">
            <div className="app_title"><h1>Counter</h1></div>
            <div className="count_display">{count}</div>
            <button className="count_btn" onClick={handleClick}>{btn}</button>
        </div>
    </>
  )
}
