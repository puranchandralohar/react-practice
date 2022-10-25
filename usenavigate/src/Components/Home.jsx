import React from 'react'
import { useNavigate } from 'react-router-dom'



export function Home() {

    const navigate = useNavigate()
    const x=5;

    function move(){
        navigate('/about', {state:{
            id:x,
        }})
    }

    function sendData(){
        navigate("/contact")
    }


  return (
    <div>
         <div>Home</div>
         <button onClick={move}>Send</button>
         <button onClick={sendData}>Goto</button>
    </div>
   
  )
}
