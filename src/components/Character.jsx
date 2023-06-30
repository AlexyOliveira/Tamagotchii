import React from "react";
import characterHappy from "../img/pikachu-happy.gif";
import characterSad from "../img/pikachu-sad.gif";
import "./Character.css";
import { useSelector } from "react-redux";

function Character() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getEnergy = useSelector((state) => state.setPokeInfoReducer.energy);
  return (
    <div className="character-container">
      <img
        src={getHunger === 1 || getEnergy === 0 ? characterSad : characterHappy}
        alt="character"
      />
    </div>
  );
}

export default Character;
