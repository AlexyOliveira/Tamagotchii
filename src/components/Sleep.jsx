import React, { useEffect, useRef } from "react";
import "./Sleep.css";
import { useDispatch, useSelector } from "react-redux";
import { setEnergyAdd } from "../redux/actions";

function Sleep() {
  const getHour = useSelector((state) => state.setPokeInfoReducer.hour);
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      setInterval(() => {
        dispatch(setEnergyAdd());
      }, 180000);
    } else {
      isMounted.current = true;
    }
  }, [dispatch, getHour]);

  return <div id="center" className="center-are" />;
}

export default Sleep;
