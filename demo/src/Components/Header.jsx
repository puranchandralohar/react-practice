import React from 'react';
import './Header.css'
import { Toggle } from './Toggle'

export function Header(props) {

  return (
    <>
        <header className={`light flex`}>
            <div className="logo flex">
                <h2>{props.title}</h2>
            </div>
            <nav className='flex'>
                <a href="?">Home</a>
                <a href="?">Services</a>
                <a href="?">About</a>
                <a href="?">Contact</a>
            </nav>
        </header>
        <Toggle />

    </>
  )
}
