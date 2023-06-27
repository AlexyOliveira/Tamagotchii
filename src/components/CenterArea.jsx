import React from "react";
import Character from "./Character";
import "./CenterArea.css";
import Food from "./Food";
import { useSelector } from "react-redux";

function CenterArea() {
  const getArea = useSelector((state) => state.setPokeAreaReducer.area);
  return (
    <div id="center" className="center-area">
      {getArea === "home" ? (
        <Character />
      ) : getArea === "food" ? (
        <Food />
      ) : null}
    </div>
  );
}

export default CenterArea;
