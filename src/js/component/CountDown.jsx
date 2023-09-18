import React, { useState, useEffect } from "react";

export default function CountDown() {
  const [countdownNumber, setCountdownNumber] = useState(0);

  const handleCountdownStart = () => {
    const number = prompt("Ingresa un número para comenzar el conteo regresivo:");
    if (number !== null) {
      setCountdownNumber(parseInt(number));
    }
  };

  useEffect(() => {
    let intervalId;

    if (countdownNumber > 0) {
      intervalId = setInterval(() => {
        setCountdownNumber((prevNumber) => prevNumber - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [countdownNumber]);

  return (
    <div>
      <button className="btn btn-info" onClick={handleCountdownStart}>
        {countdownNumber > 0 ? `Conteo Regresivo: ${countdownNumber}` : "Iniciar Cuenta Regresiva"}
      </button>
    </div>
  );
}