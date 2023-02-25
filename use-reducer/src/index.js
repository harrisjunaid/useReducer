import React, { StrictMode, useRef } from "react";
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
  const sound = useRef();
  const color = useRef();
  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = "";
    color.current.value = "";
  }
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Sound..." ref={sound}/>
      <input type="color" ref={color}/>
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