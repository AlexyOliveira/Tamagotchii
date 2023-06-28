import React, { useEffect, useState } from "react";
import "./Clock.css";
import { useDispatch } from "react-redux";
import { setDay, setHours } from "../redux/actions";

function Clock() {
  const [time, setTime] = useState({
    hours: 12,
    minutes: 0,
  });
  const dispatch = useDispatch();
  const get_environment = document.querySelectorAll("#center");

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
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    get_environment.forEach((env) => {
      if (time.minutes > 0) {
        time.hours === 17
          ? env.classList.add("night-17")
          : env.classList.remove("night-17");
        time.hours === 18
          ? env.classList.add("night-18")
          : env.classList.remove("night-18");
        time.hours === 19
          ? env.classList.add("night-19")
          : env.classList.remove("night-19");
        time.hours === 20
          ? env.classList.add("night-20")
          : env.classList.remove("night-20");
        time.hours > 20 || time.hours < 6
          ? env.classList.add("night")
          : env.classList.remove("night");

        time.hours === 6
          ? env.classList.add("morning-6")
          : env.classList.remove("morning-6");
        time.hours === 7
          ? env.classList.add("morning-7")
          : env.classList.remove("morning-7");
        time.hours === 8
          ? env.classList.add("morning-8")
          : env.classList.remove("morning-8");
        time.hours === 9
          ? env.classList.add("morning-9")
          : env.classList.remove("morning-9");
      }
    });

    if (time.hours === 23 && time.minutes === 59) {
      dispatch(setDay(1));
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
