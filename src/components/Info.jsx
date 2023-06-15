import React from "react";
import "./Info.css";

function Info() {
  return (
    <div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         Poke Info
        </button>
        <ul class="dropdown-menu">
          <li class="dropdown-item">NAME: Pikachu</li>
          <li class="dropdown-item">AGE: 1y</li>
          <li class="dropdown-item">
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
