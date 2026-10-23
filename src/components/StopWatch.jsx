//lets see how to create stopwatch with help of hook in react

import { useEffect,useState } from "react";
const StopWatch=()=>{
const [time,setTime]=useState(0);
const [running,setRunning]=useState(false);
const [paused,setPaused]=useState(false);

useEffect(()=>{
    let interval;
    if(running && !paused)
    {
        interval=setInterval(()=>{
            setTime((time)=>time+1),1000
        })
    }
    return()=>clearInterval(interval);
},[running,paused])
const handleStart=()=>{
    setTime(0);
    setRunning(true);
    setPaused(false);
}
const handleStop=()=>{
     setTime(0);
    setRunning(false);
    setPaused(false);
}

const handlePause=()=>{
    setPaused(true);
}
const handleResume=()=>{
    setPaused(false);
}



// Event  based

    return(
        <>
        <h1>StopWatch</h1>
        <h2>{time} seconds</h2>
        <button onClick={handleStart} disabled={paused}>Start</button>&nbsp;&nbsp;
        <button onClick={handleStop}>Stop</button>&nbsp;&nbsp;
        <button onClick={handlePause} disabled={!running}>Pause</button>&nbsp;&nbsp;
        <button onClick={handleResume}disabled={!paused}>Resume</button>&nbsp;&nbsp;

        </>
    )
}
export default StopWatch;