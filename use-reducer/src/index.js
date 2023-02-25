import React, { StrictMode, useReducer } from "react";
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
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>

    </>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);