import React from 'react';
import {useState, useEffect} from "react";

const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return() => {
            console.log("COMPONENT UNMOUNTED");
        };
    }, []);

  return (
   <div>
    <input 
    onChange={(event) => {
        setText(event.target.value);
    }}
    />
    <h1>{text}</h1>
   </div>
  )
}

export default Text;

//REACT COMPONENT LIFECYCLE
//MOUNTING
//STATE CHANGE
//UNMOUNTING

//useeffect call when the component mounted 
//here when we are updated the content in the input the component mounted again and again
//but we want when the state change the component don't mount