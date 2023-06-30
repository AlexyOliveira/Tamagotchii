import React from "react";
import { useSelector } from "react-redux";

function InfoBars() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getEnergy = useSelector((state) => state.setPokeInfoReducer.energy);
  return (
    <>
      <div className="hunger-bar-container">
        <span className="hunger-text">
          <i className="fa-solid fa-drumstick-bite" />
        </span>
        <div
          className={
            getHunger >= 1 ? "hunger-bar red bord-left" : "hunger-bar bord-left"
          }
        />
        <div className={getHunger >= 2 ? "hunger-bar red" : "hunger-bar"} />
        <div className={getHunger >= 3 ? "hunger-bar red" : "hunger-bar"} />
        <div className={getHunger >= 4 ? "hunger-bar red" : "hunger-bar"} />
        <div
          className={
            getHunger === 5
              ? "hunger-bar red bord-right"
              : "hunger-bar bord-right"
          }
        />
      </div>
      <div className="hunger-bar-container">
        <span className="hunger-text">
          <i className="fa-solid fa-bolt" />
        </span>
        <div
          className={
            getEnergy >= 1 ? "hunger-bar red bord-left" : "hunger-bar bord-left"
          }
        />
        <div className={getEnergy >= 2 ? "hunger-bar red" : "hunger-bar"} />
        <div className={getEnergy >= 3 ? "hunger-bar red" : "hunger-bar"} />
        <div className={getEnergy >= 4 ? "hunger-bar red" : "hunger-bar"} />
        <div
          className={
            getEnergy === 5
              ? "hunger-bar red bord-right"
              : "hunger-bar bord-right"
          }
        />
      </div>
    </>
  );
}

export default InfoBars;
