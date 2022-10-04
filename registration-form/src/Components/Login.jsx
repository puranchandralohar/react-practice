import React from 'react';
import './Login.css'

export function Login(){
    return(
        <div className='login_container'>
            <form className='login_form'>
                <label htmlFor="username">
                    <input type="text" name='uname' placeholder='Enter Username'/>
                </label> 
                <label htmlFor="password">
                    <input type="text" name='password' placeholder='Enter Password'/>
                </label>
                <button type='submit'>Login</button>
            </form>

        </div>

    );
}