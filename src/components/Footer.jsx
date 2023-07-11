import React from "react";
import "./Footer.css";
import food from "../img/refrigerator.png";
import games from "../img/games.png";
import home from "../img/home.png";
import bed from "../img/bed-icon.png";
import syringe from "../img/syringe.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setArea,
  setSick,
  setSleepToggle,
  setSyringeToggle,
} from "../redux/actions";

function Footer() {
  const getArea = useSelector((state) => state.setPokeAreaReducer.area);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getSickDay = useSelector((state) => state.setPokeInfoReducer.sickDay);
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

  const handleSyringeClick = () => {
    dispatch(setSyringeToggle(true));
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    dispatch(setSick(randomNumber));
    setInterval(() => {
      dispatch(setSyringeToggle(false));
    }, 6000);
  };
  return (
    <footer>
      <img
        onClick={(e) => handleClick(e)}
        className={
          getArea === "sleep" && getSleepToggle
            ? "food-btn btn-sleep-mode"
            : getSickDay === getDay
            ? "food-btn btn-sleep-mode"
            : "food-btn"
        }
        src={food}
        alt="food"
      />
      <img
        className={getSickDay === getDay ? "bed-btn btn-sick-mode" : "bed-btn"}
        onClick={(e) => handleSleepClick(e)}
        src={bed}
        alt="sleep"
      />
      <img
        className={getArea === "sleep" ? "btn-sleep-mode" : undefined}
        onClick={(e) => handleClick(e)}
        src={home}
        alt="home"
      />
      <img
        className={
          getArea === "sleep" && getSleepToggle
            ? "games-btn btn-sleep-mode"
            : getSickDay === getDay
            ? "games-btn btn-sick-mode"
            : "games-btn"
        }
        src={games}
        alt="games"
      />
      <img
        className={
          getDay !== getSickDay ? "syringe-btn btn-sick-mode" : "syringe-btn"
        }
        onClick={(e) => handleSyringeClick(e)}
        src={syringe}
        alt="syringe"
      />
    </footer>
  );
}

export default Footer;
