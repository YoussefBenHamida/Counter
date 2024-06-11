import { useState } from "react";

export const Counter =()=>{
    const [Counter, setCounter] =useState(0)

    const incerment =()=>{
        setCounter(Counter+1)
    }
    
    const decrement =()=>{
        if (Counter >0) {
        setCounter(Counter-1)}
    }
    
    const reset =()=>{
        setCounter(0)
    }
    return (
        <div className="Counter">
        <button onClick={incerment}>+</button>
        <p>{Counter}</p>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}
