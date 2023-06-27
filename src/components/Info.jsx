import React, { useEffect } from "react";
import "./Info.css";
import { useDispatch, useSelector } from "react-redux";
import { setEnergySub } from "../redux/actions";

function Info() {
  const getAge = useSelector((state) => state.setPokeInfoReducer.age);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getHour = useSelector((state) => state.setPokeInfoReducer.hour);
  const getEnergy = useSelector((state) => state.setPokeInfoReducer.energy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getHour === 13) {
      dispatch(setEnergySub());
    }
    if (getHour === 15) {
      dispatch(setEnergySub());
    }
    if (getHour === 18) {
      dispatch(setEnergySub());
    }
    if (getHour === 21) {
      dispatch(setEnergySub());
    }
    if (getHour === 0) {
      dispatch(setEnergySub());
    }
  }, [getHour]);
  return (
    <div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Poke Info
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">NAME: Pikachu</li>
          <li className="dropdown-item">AGE: {getAge}</li>
          <li className="dropdown-item">DAY: {getDay}</li>
          <li className="dropdown-item">
            <div className="hunger-bar-container">
              <span className="hunger-text">HUNGER:{getHunger}</span>
              <div
                className={
                  getHunger >= 1
                    ? "hunger-bar red bord-left"
                    : "hunger-bar bord-left"
                }
              />
              <div
                className={getHunger >= 2 ? "hunger-bar red" : "hunger-bar"}
              />
              <div
                className={getHunger >= 3 ? "hunger-bar red" : "hunger-bar"}
              />
              <div
                className={getHunger >= 4 ? "hunger-bar red" : "hunger-bar"}
              />
              <div
                className={
                  getHunger === 5
                    ? "hunger-bar red bord-right"
                    : "hunger-bar bord-right"
                }
              />
            </div>
            <div className="hunger-bar-container">
              <span className="hunger-text">ENERGY{getEnergy}: </span>
              <div
                className={
                  getEnergy >= 1
                    ? "hunger-bar red bord-left"
                    : "hunger-bar bord-left"
                }
              />
              <div
                className={getEnergy >= 2 ? "hunger-bar red" : "hunger-bar"}
              />
              <div
                className={getEnergy >= 3 ? "hunger-bar red" : "hunger-bar"}
              />
              <div
                className={getEnergy >= 4 ? "hunger-bar red" : "hunger-bar"}
              />
              <div
                className={
                  getEnergy === 5
                    ? "hunger-bar red bord-right"
                    : "hunger-bar bord-right"
                }
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
