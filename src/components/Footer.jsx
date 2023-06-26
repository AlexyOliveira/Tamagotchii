import React from "react";
import "./Footer.css";
import food from "../img/refrigerator.png";
import games from "../img/games.png";

function Footer() {
  return (
    <footer>
      <img className="food-btn" src={food} alt="food" />
      <img className="games-btn" src={games} alt="games" />
    </footer>
  );
}

export default Footer;
