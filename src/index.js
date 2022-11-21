import React from "react";
import ReactDOM from "react-dom/client";
import Borad from "./playChess";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Borad knightPosition={[7, 4]}></Borad>
  </React.StrictMode>
);
