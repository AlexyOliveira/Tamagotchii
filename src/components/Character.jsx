import React, { useEffect } from "react";
import characterHappy from "../img/pikachu-happy.gif";
import characterSad from "../img/pikachu-sad.gif";
import characterSick from "../img/pikachu-sick.gif";
import "./Character.css";
import { useSelector } from "react-redux";

function Character() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getEnergy = useSelector((state) => state.setPokeInfoReducer.energy);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getSickDay = useSelector((state) => state.setPokeInfoReducer.sickDay);

  return (
    <div className="character-container">
      <img
        src={
          getDay === getSickDay
            ? characterSick
            : getHunger <= 1 || getEnergy === 0
            ? characterSad
            : characterHappy
        }
        alt="character"
      />
    </div>
  );
}

export default Character;
