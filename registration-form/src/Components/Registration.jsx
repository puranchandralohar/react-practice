import React, { useState } from "react";
import "./Style.css";

export function Registration() {
  const [formdata,setFormdata] =useState({
    username:"",
    password:"",
    repeat_password:""
  })

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setFormdata((prev)=>{
      return {...prev,[name]:value}
    })
  }


  return (
    <>
      <div className="container">
        <form>
          <div className="wrapper">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            
            <input
              type="text"
              value={formdata.username}
              onChange={handleChange}
              placeholder="Enter Username"
              name="username"
              id="username"
              required
            />

            <input
              type="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter Password"
              name="password"
              id="psw"
              required
            />

            <input
              type="password"
              value={formdata.repeat_password}
              onChange={handleChange}
              placeholder="Repeat Password"
              name="repeat_password"
              id="psw-repeat"
              required
            />
            <hr />

            <p>
              By creating an account you agree to our{" "}
              <a href="?">Terms & Privacy</a>.
            </p>
            <button type="submit" class="registerbtn">
              Register
            </button>

            <p>
              Already have an account? <a href="?">Sign in</a>.
            </p>
          
          </div>
        </form>
      </div>
    </>
  );
}
