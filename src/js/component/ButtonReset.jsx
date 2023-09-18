import React from "react";

export default function ButtonReset({ onReset }) {
  return (
    <button className="btn btn-primary" onClick={onReset}>Reset</button>
  );
}