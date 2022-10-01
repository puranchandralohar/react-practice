import React from 'react'
import './Style.css'

export function Registration() {








  return (
    <>
    <div className="container">
    <form>
        <div className="wrapper">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        
        <input type="text" placeholder="Enter Username" name="username" id="username" required />

        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
        <hr />

        <p>By creating an account you agree to our <a href="?">Terms & Privacy</a>.</p>
        <button type="submit" class="registerbtn">Register</button>

        <p>Already have an account? <a href="?">Sign in</a>.</p>
        </div>
        
    </form>
    </div>
    </>
  )
}
