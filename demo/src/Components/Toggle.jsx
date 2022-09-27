import React from 'react';
import { useState } from 'react'
   


export function Toggle(){
    const[val,setVal] = useState('Light');
    const[color,setColor] = useState('Light');
    

    function toggle(){
        setVal((val ==='Light')?'Dark':'Light');
        setColor((color === 'Light')? document.header.classList.add('headDark'):document.header.classList.add('head'));
    }

    return(
        <>
            <button onClick={toggle}>{val}</button>
        </>
    )
}