import { createContext, useContext, useState } from "react";

//useContext is a React Hook that lets you read and subscribe to context from your component.
const ThemeContext=createContext();
function ContextDemo({children})
{
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme((t)=>(t==="light"?"dark":"light"))
    }
    return(
        <>
        <h1>Context Demo</h1>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}

function ThemeButton()
{
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <>
        <button onClick={toggleTheme} style={{background:theme==="dark"?"black":"white",color:theme==="dark"?"white":"black"}}>
            color Theme:{theme}
        </button>
        </>
    )
}
export {ContextDemo,ThemeButton};