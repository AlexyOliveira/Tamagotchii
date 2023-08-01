import React, { useEffect, useRef } from "react";
import "./Lifebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLife } from "../redux/actions";

function Lifebar() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  const getLife = useSelector((state) => state.setPokeInfoReducer.life);
  const getHour = useSelector((state) => state.setPokeInfoReducer.hour);
  const dispatch = useDispatch();

  // Usa useRef para armazenar o valor de getHour
  const prevHourRef = useRef(getHour);

  useEffect(() => {
    // Verifica a diferença entre o valor anterior de getHour e o valor atual
    // Usando o módulo (%) para lidar com a reinicialização do relógio em 24 horas
    const hourDifference = (getHour - prevHourRef.current + 24) % 24;

    // Se a diferença for maior ou igual a 3 (3 horas passaram), então dispatch(setLife())
    if (hourDifference >= 3 && getHunger === 0) {
      dispatch(setLife());
      // Atualiza o valor armazenado em prevHourRef para o novo valor de getHour
      prevHourRef.current = getHour;
    }
  }, [dispatch, getHunger, getHour]);
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
