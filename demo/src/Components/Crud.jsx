import React from 'react'
import { useState } from 'react';
import './Crud.css'

export default function Crud() {
    const [items, setItems] = useState([]);
    const [fruit, setFruit] = useState("");
  
    const addItem = () => {
      setItems([...items, fruit]);
      setFruit("");
    };
  
    return (
      <>
      <div className="container">
        <input
          type="text"
          value={fruit}
          placeholder={"add fruit"}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button onClick={addItem}>add item</button>
        {items.map((item) => (
          <div>
            <span>{item}</span>
            <button
              onClick={() => {
                let filteredItems = items.filter((value) => value !== item);
                setItems([...filteredItems]);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      </>
    );
}
