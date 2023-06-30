import React, { useEffect, useRef } from "react";
import "./Sleep.css";
import "./CenterArea.css";
import { useDispatch } from "react-redux";
import { setEnergyAdd } from "../redux/actions";

function Sleep() {
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
  }, [dispatch]);

  return <div className="sleep-area" />;
}

export default Sleep;
