import React, { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";
function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <>
     <input
      type="checkbox"
      value={checked}
      onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);