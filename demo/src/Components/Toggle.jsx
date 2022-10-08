import React from 'react';
import './Header.css'
import { useState } from 'react'
   


export function Toggle(){
    const[val,setVal] = useState('Light');
    const[color,setColor] = useState('Light');
    

    function toggle(){
        setVal((val ==='Light')?'Dark':'Light');
        setColor((color === 'Light')? document.body.header.classList.add('dark'):document.body.header.classList.add('light'));
    }

    return(
        <>
            <button onClick={toggle}>{val}</button>
        </>
    )
}