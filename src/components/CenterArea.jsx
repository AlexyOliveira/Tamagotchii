import React from "react";
import Character from "./Character";
import "./CenterArea.css";
import Food from "./Food";

function centerArea() {
  return (
    <div id="center" className="center-area">
      <Food />
    </div>
  );
}

export default centerArea;
