import React, { useEffect, useRef } from "react";
import "./Sleep.css";
import "./CenterArea.css";
import { useDispatch, useSelector } from "react-redux";
import { setEnergyAdd } from "../redux/actions";

function Sleep() {
  const dispatch = useDispatch();
  const getSleepToggle = useSelector(
    (state) => state.setPokeAreaReducer.sleepToggle
  );
  const getHour = useSelector((state) => state.setPokeInfoReducer.hour);
  const prevHourRef = useRef(getHour);

  useEffect(() => {
    const hourDifference = (getHour - prevHourRef.current + 24) % 24;
    if (getSleepToggle) {
      if (hourDifference >= 3) {
        dispatch(setEnergyAdd());
        // Atualiza o valor armazenado em prevHourRef para o novo valor de getHour
        prevHourRef.current = getHour;
      }
    }
  }, [dispatch, getSleepToggle, getHour]);

  return <div className="sleep-area" />;
}

export default Sleep;
