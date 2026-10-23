//How to create hook useRef in react 
//useRef is a React Hook that lets you reference a value that's not needed for rendering
import {useRef} from "react";
export default function RefDemo()
{
const ref=useRef(0);

function handleClick()
{
   ref.current=ref.current+1;
   alert("You clicked " + ref.current + " times!!");
}
return(
    <>
    <button onClick={handleClick}>Click Me</button>
    </>
)
}