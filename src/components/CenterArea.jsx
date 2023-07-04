import React, { useRef } from "react";
import Character from "./Character";
import "./CenterArea.css";
import Food from "./Food";
import { useSelector } from "react-redux";
import Sleep from "./Sleep";
import InfoBars from "./InfoBars";

function CenterArea() {
  const getHour = useSelector((state) => state.setPokeInfoReducer.hour);
  const getArea = useSelector((state) => state.setPokeAreaReducer.area);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getSickDay = useSelector((state) => state.setPokeInfoReducer.sickDay);
  const get_environment = document.querySelector("#center");
  const getSleepToggle = useSelector(
    (state) => state.setPokeAreaReducer.sleepToggle
  );
  const isMounted = useRef(false);

  if (isMounted.current) {
    getHour === 17
      ? get_environment.classList.add("night-17")
      : get_environment.classList.remove("night-17");
    getHour === 18
      ? get_environment.classList.add("night-18")
      : get_environment.classList.remove("night-18");
    getHour === 19
      ? get_environment.classList.add("night-19")
      : get_environment.classList.remove("night-19");
    getHour === 20
      ? get_environment.classList.add("night-20")
      : get_environment.classList.remove("night-20");
    getHour > 20 || getHour < 6
      ? get_environment.classList.add("night")
      : get_environment.classList.remove("night");

    getHour === 6
      ? get_environment.classList.add("morning-6")
      : get_environment.classList.remove("morning-6");
    getHour === 7
      ? get_environment.classList.add("morning-7")
      : get_environment.classList.remove("morning-7");
    getHour === 8
      ? get_environment.classList.add("morning-8")
      : get_environment.classList.remove("morning-8");
    getHour === 9
      ? get_environment.classList.add("morning-9")
      : get_environment.classList.remove("morning-9");
  } else {
    isMounted.current = true;
  }
  return (
    <div id="center" className="center-area">
      <div className="screen-bars">
        <InfoBars />
      </div>
      {getArea === "home" ? (
        <Character />
      ) : getArea === "food" ? (
        <Food />
      ) : getArea === "sleep" && getSleepToggle && getDay !== getSickDay ? (
        <Sleep />
      ) : (
        <Character />
      )}
    </div>
  );
}

export default CenterArea;
