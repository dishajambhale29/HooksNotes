//useCallback is React Hook that lets you cache a function definition between re-renders

import React,{ useCallback, useState } from "react"

const Child=React.memo(
   ( {onClick})=>{
    console.log("Child renders");
    return<button onClick={onClick}>Increment</button>
    
   }
)
export default function Callback()
{
    const [count,setCount]=useState(0);
    const handleIncrement=useCallback(()=>{
        setCount((i)=>i+1)
    },[])
    return(
        <>
        <h1>CallBack demo</h1>
        <div>
            <h1>Count:{count}</h1>
            <Child onClick={handleIncrement}/>
        </div>
        </>
    )
}