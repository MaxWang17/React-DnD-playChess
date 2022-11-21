import React from "react";
import Knight from "./Knight";

export default function Square({ black, children }) {
  console.log("black: ", black);
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "50px",
        height: "50px",
      }}
    >
      {children}
    </div>
  );
}
