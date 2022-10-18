import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Counter.css'

export function AutoCounter() {
    const [count , setCount] = useState(0)
    const [play, setPlay] = useState(false);
    const [pause, setPause] = useState(false)
    const [reset,setReset] = useState(0)

    // useEffect(()=>{
    //     let interval;
    //     if(play){
    //         interval = setInterval(()=>{
    //             setCount(count+1)
    //         },1000)
    //     }
        
    // },[play])

    useEffect(() => {
        if(play){
            const interval = setInterval(() => {
                setCount((counter)=>counter+1);
              }, 100);
          
              return () => {
                clearInterval(interval);
              };
        }
      }, [play]);



    const handlePlay = ()=>{
        setPlay(true);
    }
   
    const handlePause= ()=>{
        setPlay(false)
        setPause(true)
    }

    const handleReset =()=>{
        setPlay(false)
        setCount(0)
    }


  return (
    <>
        <div className="counter_app">
            <div className="app_title"><h1>Counter</h1></div>
            <div className="count_display">{count}</div>
            <button className="count_btn" onClick={handlePlay}>Play</button>
            <button className="count_btn" onClick={handlePause}>Pause</button>
            <button className="count_btn" onClick={handleReset}>Reset</button>
        </div>
    </>
  )
}
