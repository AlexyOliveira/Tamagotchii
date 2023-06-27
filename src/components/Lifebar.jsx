import React, { useEffect } from "react";
import "./Lifebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLife } from "../redux/actions";

function Lifebar() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getLife = useSelector((state) => state.setPokeInfoReducer.life);
  const dispatch = useDispatch();
  useEffect(() => {
    if (getHunger === 0 && getLife > 0) {
      setTimeout(() => {
        dispatch(setLife());
      }, 60000);
    }
  }, [getHunger, dispatch, getLife]);
  return (
    <div className="life-bar">
      {getLife >= 1 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife >= 2 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife >= 3 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife >= 4 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife >= 5 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife >= 6 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife >= 7 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
      {getLife === 8 ? (
        <div className="div-life-red">
          <i className="fa-solid fa-heart" />
        </div>
      ) : (
        <div className="div-life-empty">
          <i className="fa-solid fa-heart" />
        </div>
      )}
    </div>
  );
}

export default Lifebar;
