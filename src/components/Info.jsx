import React from "react";
import "./Info.css";

function Info() {
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
          <li className="dropdown-item">AGE: 1y</li>
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
