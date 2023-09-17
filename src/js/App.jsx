import React from "react";
import "../styles/index.css"

export default function App({ unidad, decena, centena, milesima, decmilesima, centmilesima }) {
  return (
    <div className="mainBox">
      <div className="box">
        <i className="far fa-clock mt-3"></i>
      </div>
      <div className="box">{centmilesima}</div>
      <div className="box">{decmilesima}</div>
      <div className="box">{milesima}</div>
      <div className="box">{centena}</div>
      <div className="box">{decena}</div>
      <div className="box">{unidad}</div>
    </div>
  );
}