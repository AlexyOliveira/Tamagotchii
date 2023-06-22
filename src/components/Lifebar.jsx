import React, { useEffect } from "react";
import "./Lifebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLife } from "../redux/actions";

function Lifebar() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getLife = useSelector((state) => state.setPokeInfoReducer.life);
  const dispatch = useDispatch();
  useEffect(() => {
    if (getHunger <= 0) {
      setTimeout(() => {
        dispatch(setLife());
      }, 3000);
    }
  }, [getHunger, dispatch]);
  return (
    <div className="life-bar">
      {getLife >= 1 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife >= 2 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife >= 3 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife >= 4 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife >= 5 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife >= 6 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife >= 7 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
      {getLife === 8 ? (
        <div className="div-life">
          <i className="fa-solid fa-heart" />
        </div>
      ) : null}
    </div>
  );
}

export default Lifebar;
