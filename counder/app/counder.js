"use client";

import React,{useState} from 'react';

function Counter() {
    const [count, setCount]=useState(0);

    const incrementCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <div className='counter-container'>
            <button className='counter-button' onClick={incrementCount}>Increment</button>
            <span className='counter-display'>Count:{count}</span>

        </div>
    </div>
  )
}

export default Counter;