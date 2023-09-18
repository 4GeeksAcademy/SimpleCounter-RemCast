import React from "react";

export default function ButtonStop({ isRunning, toggleRunning }) {
  return (
    <button className={isRunning ? "btn btn-danger" : "btn btn-success"} onClick={toggleRunning}>
    {isRunning ? "Detener" : "Continuar"}
  </button>
  );
}