import React, { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";
function App() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
     0
  );
  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);