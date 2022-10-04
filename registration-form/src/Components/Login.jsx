import React, { useState } from "react";
import "./Login.css";

export function Login() {
const [data,setData] = useState({})

const handleData = (e)=>{
   const name = e.target.name;
   const value = e.target.value;
//    console.log(name,value);
   setData((pre)=>{
    return {...pre,[name]:value}
   })
}







  return (
    <div className="login_container">
      <form className="login_form">
        <h1>Login</h1>
        <label htmlFor="username">
          <input type="text" name="username" value={data.username} onChange={handleData} placeholder="Enter Username" />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" value={data.password} onChange={handleData}  placeholder="Enter Password" />
        </label>
        <button className="submit_btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
