import { useState } from "react";

//how to use Hooks in react 
const UseState=()=>{
    const[count,setCount]=useState(0);
    const handleincrement=()=>{
        setCount(count+1);
    }
     const handledecrement=()=>{
        setCount(count-1);
    }
     const handlereset=()=>{
        setCount(0);
    }

    return(
        <>
        <h1>UseSTate Demo</h1>
        <h1>Count:{count}</h1>
        <button onClick={handleincrement}>+</button>
        <button onClick={handledecrement}>-</button>
        <button onClick={handlereset}>Reset</button>
        </>
    )
}
export default UseState;