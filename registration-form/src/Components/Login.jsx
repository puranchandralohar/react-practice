import React, { useState } from "react";
import "./Login.css";

export function Login() {
const [data,setData] = useState({
    username:"",
    password:""
})
const [submit,setSubmit] = useState(false);


const database = {
   username :localStorage.getItem('username'),
   password :localStorage.getItem('password')
}

const handleData = (e)=>{
   const name = e.target.name;
   const value = e.target.value;
//    console.log(name,value);
   setData((pre)=>{
    return {...pre,[name]:value}
   })
}

const isSubmitted = (e)=>{
    e.preventDefault()

    if(database.username === data.username){
        if(database.password === data.password){
            alert("Login Successfully")
            setSubmit(true)
        }
        else{
            alert("Username or Password is incorrect")
        }
    }
    else{
        alert("Username or Password is incorrect")
    } 
}






  return (
    <div className="login_container">
      <form className="login_form" onSubmit={isSubmitted}>
        <h1>Login</h1>
        <label htmlFor="username">
          <input 
          type="text" 
          name="username" 
          value={data.username} 
          onChange={handleData} 
          placeholder="Enter Username"
          autoComplete="off" />
        </label>

        <label htmlFor="password">
          <input 
          type="password" 
          name="password" 
          value={data.password} 
          onChange={handleData}  
          placeholder="Enter Password" />
        </label>

        <button className="submit_btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
