import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'

export function About() {
    const [name, setName] =useState("Aman")

    const location = useLocation();

    const refEle = useRef("");

    const handleChange = ()=>{
        setName("")
        refEle.current.focus()
    }

  return (
    <>
    <div>Hey, You are now viewing About Page. {location.state.id}</div>

    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} ref={refEle}/>
        <button onClick={handleChange}>Reset</button>
    </div>
    
    </>
  )
}
