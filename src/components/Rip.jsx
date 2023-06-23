import React from "react";
import "./Rip.css";
import tomb from "../img/rip.webp";

function Rip() {
  return (
    <div className="rip">
      <img src={tomb} alt="character" />
      <a href="http://localhost:3000">
        <button type="button" className="btn btn-light">
          RESTART
        </button>
      </a>
    </div>
  );
}

export default Rip;
