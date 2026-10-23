//useMemo is React Hook that lets you cache the result of calculation between re-renders

import { useState } from "react"

function slowsquare(n){
    for(let i=1;i<=100;i++)
        return n*n;
}
export default function Memo()
{
    const [number,setNumber]=useState(0);
    const square=useMemo(()=>slowsquare(number),[number])
    return(
        <>
        <div>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <h1>Square value:{square}</h1>
        </div>
        </>
    )
}