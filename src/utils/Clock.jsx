import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => ({
        ...prevTime,
        minutes: prevTime.minutes + 1,
        hours:
          prevTime.minutes === 59
            ? prevTime.hours + 1
            : prevTime.hours
      }));
      setTime((prevTime) => ({
        ...prevTime,
        hours: prevTime.hours === 24 & prevTime.minutes === 60
          ? prevTime.hours = 0 : prevTime.hours,
        minutes: prevTime.minutes === 60 ? prevTime.minutes = 0 : prevTime.minutes,
      }));
     
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="timer">
      <p>{`${time.hours < 10 ? `0${Number(time.hours)}`: Number(time.hours) }h : ${
        time.minutes < 10 ? `0${Number(time.minutes)}` : Number(time.minutes) 
      }m`}</p>
    </div>
  );
}

export default Clock;
