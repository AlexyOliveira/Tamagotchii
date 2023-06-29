import React from "react";
import "./Footer.css";
import food from "../img/refrigerator.png";
import games from "../img/games.png";
import home from "../img/home.png";
import bed from "../img/bed-icon.png";
import syringe from "../img/syringe.png";
import { useDispatch, useSelector } from "react-redux";
import { setArea, setSleepToggle } from "../redux/actions";

function Footer() {
  const getArea = useSelector((state) => state.setPokeAreaReducer.area);
  const getSleepToggle = useSelector(
    (state) => state.setPokeAreaReducer.sleepToggle
  );
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    dispatch(setArea(target.alt));
  };

  const handleSleepClick = ({ target }) => {
    dispatch(setArea(target.alt));
    dispatch(setSleepToggle());
  };
  return (
    <footer>
      <img
        onClick={(e) => handleClick(e)}
        className={
          getArea === "sleep" && getSleepToggle
            ? "food-btn btn-sleep-mode"
            : "food-btn"
        }
        src={food}
        alt="food"
      />
      <img
        className="bed-btn"
        onClick={(e) => handleSleepClick(e)}
        src={bed}
        alt="sleep"
      />
      <img
        className={getArea === "sleep" && "btn-sleep-mode"}
        onClick={(e) => handleClick(e)}
        src={home}
        alt="home"
      />
      <img className="games-btn" src={games} alt="games" />
      <img className="syringe-btn" src={syringe} alt="syringe" />
    </footer>
  );
}

export default Footer;
