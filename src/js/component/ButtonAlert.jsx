import React, { useState, useEffect } from "react";

export default function ButtonAlert({ counter }) {
  const [targetNumber, setTargetNumber] = useState(null);

  const handleSetTargetNumber = () => {
    const number = prompt("Introduce el número al cual deseas recibir una alerta:");
    if (number !== null) {
      setTargetNumber(parseInt(number));
    }
  };

  // Comprueba si se alcanza el número objetivo y muestra una alerta
  useEffect(() => {
    if (targetNumber !== null && counter >= targetNumber) {
      alert(`El contador ha alcanzado el número ${targetNumber}`);
      setTargetNumber(null); // Reinicia el número objetivo
    }
  }, [counter, targetNumber]);

  return (
    <div>
      <button className="btn btn-warning" onClick={handleSetTargetNumber}>Establecer Número Objetivo</button>
    </div>
  );
}