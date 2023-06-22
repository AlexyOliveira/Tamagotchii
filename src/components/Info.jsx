import React, { useEffect, useState } from "react";
import "./Info.css";
import { useSelector } from "react-redux";

function Info() {
  const [age, setAge] = useState(0);
  const [day, setDay] = useState(0);
  const meuEstado = useSelector((state) => state.setPokeInfoReducer.age);
  const meuEstado2 = useSelector((state) => state.setPokeInfoReducer.day);

  useEffect(() => {
    setAge(meuEstado);
    setDay(meuEstado2);
  }, [meuEstado, meuEstado2]);

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
          <li className="dropdown-item">AGE: {age}</li>
          <li className="dropdown-item">DAY: {day}</li>
          <li className="dropdown-item">
            <div className="hunger-bar-container">
              <span className="hunger-text">HUNGER:</span>
              <div className="hunger-bar" />
              <div className="hunger-bar" />
              <div className="hunger-bar" />
              <div className="hunger-bar" />
              <div className="hunger-bar" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
