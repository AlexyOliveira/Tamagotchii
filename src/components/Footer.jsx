import React from "react";
import "./Footer.css";
import food from "../img/refrigerator.png";
import games from "../img/games.png";
import home from "../img/home.png";
import { useDispatch } from "react-redux";
import { setArea } from "../redux/actions";

function Footer() {
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    dispatch(setArea(target.alt));
  };
  return (
    <footer>
      <img
        onClick={(e) => handleClick(e)}
        className="food-btn"
        src={food}
        alt="food"
      />
      <img onClick={(e) => handleClick(e)} src={home} alt="home" />
      <img className="games-btn" src={games} alt="games" />
    </footer>
  );
}

export default Footer;
