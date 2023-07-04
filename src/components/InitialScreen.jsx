import React, { useEffect } from "react";
import "./InitialScreen.css";
import { useDispatch } from "react-redux";
import { setHungerSub, setSick } from "../redux/actions";

function InitialScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    dispatch(setSick(randomNumber))
    const timer = setInterval(() => {
      dispatch(setHungerSub());     
    }, 3000);
  
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);
  return <div className="initial-screen"></div>;
}

export default InitialScreen;
