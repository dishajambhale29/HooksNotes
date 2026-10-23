import { useState } from "react";
import "./UseStatedemo.css";

export default function UseStatedemo() {

    const [count,setCount]=useState(0);
    const [text,setText]=useState("");
    const [liked,setLiked]=useState(false);
    const [gender,setGender]=useState("");
    const [course,setCourse]=useState("");
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <div className="use-state-demo">
          <h1>UseState Hooks Demo</h1>

          <div className="row">
            <button onClick={()=>{setCount(count+1)}}>
              You clicked me {count} times
            </button>
            <button onClick={handleClick}>Show</button>
          </div>

          <p>Counter: {count}</p>

          <input
            type="text"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            placeholder="Type something..."
          />
          <p>You typed: {text || "(empty)"}</p>

          <label>
            <input
              type="checkbox"
              checked={liked}
              onChange={(e)=>setLiked(e.target.checked)}
            />
            I liked this
          </label>

          <mark>You {liked? 'liked' : 'did not like'} this</mark>

          <div className="radio-group">
            <label className="radio-label">Select gender</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender=="Male"}
                onChange={(e)=>setGender(e.target.value)}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender=="Female"}
                onChange={(e)=>setGender(e.target.value)}
              />
              Female
            </label>
          </div>

          <p>You selected: {gender || "None"}</p>

          <select value={course} onChange={(e)=>setCourse(e.target.value)}>
            <option value="">-------</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
          <p>You selected course name: {course || "None"}</p>
        </div>
    )
}