import React from "react";
import Character from "./Character";
import "./CenterArea.css";
import Food from "./Food";
import { useSelector } from "react-redux";
import Sleep from "./Sleep";

function CenterArea() {
  const getArea = useSelector((state) => state.setPokeAreaReducer.area);
  const getSleepToggle = useSelector(
    (state) => state.setPokeAreaReducer.sleepToggle
  );
  return (
    <div id="center" className="center-area">
      {getArea === "home" ? (
        <Character />
      ) : getArea === "food" ? (
        <Food />
      ) : getArea === "sleep" && getSleepToggle ? (
        <Sleep />
      ) : (
        <Character />
      )}
    </div>
  );
}

export default CenterArea;
