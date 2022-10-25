import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export default function Contact() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

    
    const multiplication = useMemo(
        ()=>{
            console.log("multiplication is called")
            return (add*10);
        },[add]
    
    );
    

  return (
    <div>
        <p>Multiplication is : {multiplication}</p>
      <div className="display">
        <button onClick={()=>setAdd(add +1)}>Addition</button>
        <p>Addition is :{add}</p>
      </div>
      <div className="display">
        <button onClick={()=>setMinus(minus - 1)}>Subtraction</button>
        <p>Subtraction is :{minus}</p>
        
      </div>
    </div>
  );
}
