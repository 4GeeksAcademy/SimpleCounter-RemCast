import React, { useState, useEffect } from "react";
import "../styles/index.css";
import ButtonStop from "./component/ButtonStop.jsx";
import ButtonReset from "./component/ButtonReset.jsx"; // Agrega la importación de ButtonReset aquí
import CountDown from "./component/CountDown.jsx";
import ButtonAlert from "./component/ButtonAlert.jsx"; // Importa el nuevo componente

export default function App() {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
  
	const incrementCounter = () => {
	  setCounter((prevCounter) => prevCounter + 1);
	};
  
	const resetCounter = () => {
	  setCounter(0);
	};
  
	useEffect(() => {
	  let intervalId;
  
	  if (isRunning) {
		intervalId = setInterval(() => {
		  incrementCounter();
		}, 1000);
	  } else {
		clearInterval(intervalId);
	  }
  
	  return () => {
		clearInterval(intervalId);
	  };
	}, [isRunning]);
  
	const toggleRunning = () => {
	  setIsRunning((prevIsRunning) => !prevIsRunning);
	};
  

  return (
    <div className="mainBox">
      <div className="box">
        <i className="far fa-clock"></i>
      </div>
	  <div className="box">{Math.floor((counter / 100000) % 10)}</div>
	  <div className="box">{Math.floor((counter / 10000) % 10)}</div>
	  <div className="box">{Math.floor((counter / 1000) % 10)}</div>
	  <div className="box">{Math.floor((counter / 100) % 10)}</div>
	  <div className="box">{Math.floor((counter / 10) % 10)}</div>
      <div className="box">{Math.floor((counter / 1) % 10)}</div>      
      <ButtonStop isRunning={isRunning} toggleRunning={toggleRunning} />
	  <ButtonReset onReset={resetCounter} /> {ButtonReset}
	  <CountDown />
	  <ButtonAlert counter={counter} /> {ButtonAlert}
    </div>
  );
}