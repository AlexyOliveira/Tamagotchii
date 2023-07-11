import React from "react";
import characterHappy from "../img/pikachu-happy.gif";
import characterSad from "../img/pikachu-sad.gif";
import characterSick from "../img/pikachu-sick.gif";
import characterCrying from "../img/pikachu-crying.gif";
import "./Character.css";
import { useSelector } from "react-redux";

function Character() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getEnergy = useSelector((state) => state.setPokeInfoReducer.energy);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getSickDay = useSelector((state) => state.setPokeInfoReducer.sickDay);
  const isSyringe = useSelector((state) => state.setPokeAreaReducer.syringe);

  return (
    <div className="character-container">
      <img
        src={
          getDay === getSickDay
            ? characterSick
            : isSyringe
            ? characterCrying
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
