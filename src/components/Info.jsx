import React, { useEffect } from "react";
import "./Info.css";
import { useDispatch, useSelector } from "react-redux";
import { setAge, setEnergySub, setHungerSub } from "../redux/actions";
import InfoBars from "./InfoBars";

function Info() {
  const getAge = useSelector((state) => state.setPokeInfoReducer.age);
  const getDay = useSelector((state) => state.setPokeInfoReducer.day);
  const getHour = useSelector((state) => state.setPokeInfoReducer.hour);
  const getSleepToggle = useSelector(
    (state) => state.setPokeAreaReducer.sleepToggle
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getSleepToggle) {
      if (getHour % 3 === 2) {
        dispatch(setEnergySub());
      }
    }
    if (getHour % 3 === 2) {
      dispatch(setHungerSub());
    }
  }, [getHour]);

  return (
    <div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Poke Info
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">NAME: Pikachu</li>
          <li className="dropdown-item">AGE: {getAge}</li>
          <li className="dropdown-item">
            DAY:{" "}
            {getDay === 1
              ? "Monday"
              : getDay === 2
              ? "Tuesday"
              : getDay === 3
              ? "Wednesday"
              : getDay === 4
              ? "Thursday"
              : getDay === 5
              ? "Friday"
              : getDay === 6
              ? "Saturday"
              : getDay === 7
              ? "Sunday"
              : null}
          </li>
          <li className="dropdown-item">
            <InfoBars />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
