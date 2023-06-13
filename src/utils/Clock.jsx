import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => ({
        ...prevTime,
        minutes:
          prevTime.minutes < 60 ? prevTime.minutes + 1 : prevTime.minutes === 0,
        hours: prevTime.minutes === 60 ? prevTime.hours + 1 : prevTime.hours,
      }));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="timer">
      <p>{`${time.hours}h : ${time.minutes}m`}</p>
    </div>
  );
}

export default Clock;
