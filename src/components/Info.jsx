import React from "react";
import "./Info.css";
import { useSelector } from "react-redux";

function Info() {
  const getAge = useSelector((state) => state.setPokeInfoReducer.age);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
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
              <div className={getHunger >= 1 ? "hunger-bar red" : "hunger-bar"} />
              <div className={getHunger >= 2 ? "hunger-bar red" : "hunger-bar"} />
              <div className={getHunger >= 3 ? "hunger-bar red" : "hunger-bar"} />
              <div className={getHunger >= 4 ? "hunger-bar red" : "hunger-bar"} />
              <div className={getHunger === 5 ? "hunger-bar red" : "hunger-bar"} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
