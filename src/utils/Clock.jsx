import React, { useEffect, useState } from "react";
import "./Clock.css";
import { useDispatch, useSelector } from "react-redux";
import { setDay, setHours, setHungerSub } from "../redux/actions";

function Clock() {
  const [time, setTime] = useState({
    hours: 12,
    minutes: 0,
  });
  const dispatch = useDispatch();
  const get_environment = document.getElementById("center");
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => ({
        ...prevTime,
        minutes: prevTime.minutes + 1,
        hours: prevTime.minutes === 59 ? prevTime.hours + 1 : prevTime.hours,
      }));
      setTime((prevTime) => ({
        ...prevTime,
        hours:
          (prevTime.hours === 24) & (prevTime.minutes === 60)
            ? (prevTime.hours = 0)
            : prevTime.hours,
        minutes:
          prevTime.minutes === 60 ? (prevTime.minutes = 0) : prevTime.minutes,
      }));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (time.minutes > 0) {
      time.hours === 17
        ? get_environment.classList.add("night-17")
        : get_environment.classList.remove("night-17");
      time.hours === 18
        ? get_environment.classList.add("night-18")
        : get_environment.classList.remove("night-18");
      time.hours === 19
        ? get_environment.classList.add("night-19")
        : get_environment.classList.remove("night-19");
      time.hours === 20
        ? get_environment.classList.add("night-20")
        : get_environment.classList.remove("night-20");
      time.hours > 20 || time.hours < 6
        ? get_environment.classList.add("night")
        : get_environment.classList.remove("night");

      time.hours === 6
        ? get_environment.classList.add("morning-6")
        : get_environment.classList.remove("morning-6");
      time.hours === 7
        ? get_environment.classList.add("morning-7")
        : get_environment.classList.remove("morning-7");
      time.hours === 8
        ? get_environment.classList.add("morning-8")
        : get_environment.classList.remove("morning-8");
      time.hours === 9
        ? get_environment.classList.add("morning-9")
        : get_environment.classList.remove("morning-9");
    }

    if (time.hours === 23 && time.minutes === 59) {
      dispatch(setDay(1));
    }
    if (time.minutes === 59 && getHunger > 0) {
      dispatch(setHungerSub());
    }
    if (time.minutes === 0) {
      dispatch(setHours(time.hours));
    }
  }, [time.hours, dispatch, get_environment, time.minutes]);
  return (
    <div className="timer">
      <p>{`${
        time.hours < 10 ? `0${Number(time.hours)}` : Number(time.hours)
      }h : ${
        time.minutes < 10 ? `0${Number(time.minutes)}` : Number(time.minutes)
      }m`}</p>
    </div>
  );
}

export default Clock;
