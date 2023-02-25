import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";
const initialState = {
  message: "hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
    return {
      message: `HEY! I JUST SAID ${state.message}`
    }
    case "whisper":
    return {
      message: `excuse me I JUST SAID ${state.message}`
    }
  }
}
function App() {
  const [sound, setSound] = useState("");
  /**
   *  const sound = useRef();
   */
  const [color, setColor] = useState("#000000");
  /**
   * const color = useRef(); 
   */
  const submit = (e) => {
    e.preventDefault();

    /**
     * const soundVal = sound.current.value;
     * const colorVal = color.current.value;
     * alert(`${soundVal} sounds like ${colorVal}`);
     */

    alert(`${sound} sounds like ${color}`);

    /**
     * sound.current.value = "";
     * color.current.value = "";
     */
    setSound("");
    setColor("#000000");
  }
  /**
   * ref = {sound}
   * ref = {color}
   */
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Sound..."  value={sound} onChange={(e)=>setSound(e.target.value)}/>
      <input type="color"  value={color} onChange={(e)=>setColor(e.target.value)}/>
      <button>ADD</button>
    </form>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);