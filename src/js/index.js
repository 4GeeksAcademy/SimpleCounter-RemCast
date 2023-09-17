import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../styles/index.css"

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const digits = Array.from(String(counter).padStart(6, "0")).map(Number);

  return (
    <App
      unidad={digits[5]}
      decena={digits[4]}
      centena={digits[3]}
      milesima={digits[2]}
      decmilesima={digits[1]}
      centmilesima={digits[0]}
    />
  );
};

ReactDOM.render(<CounterApp />, document.getElementById("root"));