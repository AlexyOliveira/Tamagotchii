import React, { useEffect } from "react";
import "./InitialScreen.css";
import { useDispatch } from "react-redux";
import { setHungerSub } from "../redux/actions";

function InitialScreen() {
    const dispatch = useDispatch()
    useEffect(() => {
        let times = 3
        while (times > 0) {
            dispatch(setHungerSub())
            times = times - 1
        }
        
    }, [dispatch])
  return <div className="initial-screen"></div>;
}

export default InitialScreen;
