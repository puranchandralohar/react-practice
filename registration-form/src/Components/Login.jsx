import React from 'react';
import './Login.css'

export function Login(){
    return(
        <div className='login_container'>
            
            <form className='login_form'>
            <h1>Login</h1>
                <label htmlFor="username">
                    <input type="text" name='uname' placeholder='Enter Username'/>
                </label> 
                <label htmlFor="password">
                    <input type="text" name='password' placeholder='Enter Password'/>
                </label>
                <button className='submit_btn' type='submit'>Login</button>
            </form>

        </div>

    );
}