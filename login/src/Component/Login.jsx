import React, { Component } from 'react';
import "../App.css";

export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        };
    }

    handleUser = (event)=>{
        console.log(event.target.value);
        this.setState({
            username:event.target.value
        })
    };
    handlePassword = (event)=>{
        console.log(event.target.value);
        this.setState({
            password:event.target.value
        })
    };

    // handleSubmit = (e)=>{
    //     e.preventDefault()
    //     console.log(e.target.value);

    // }



  render() {
    return (
        <>
            <div className='wrapper'>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='userName'>
                        <input 
                        type="text" 
                        name='userName' 
                        id="username" 
                        value={this.state.username}
                        onChange={this.handleUser}
                        />
                    </label>
                    <label htmlFor='password'>
                        <input 
                        type="password" 
                        name='password' 
                        id="pwd" 
                        value={this.state.password}
                        onChange={this.handlePassword}                    
                        />
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
  }
}
