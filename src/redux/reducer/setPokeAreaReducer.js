import { SET_AREA, SET_SLEEP_TOGGLE } from "../actions";

const INITIAL_STATE = {
  area: "home",
  sleepToggle: false,
};

const setPokeAreaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AREA:
      return {
        ...state,
        area: action.payload,
      };
    case SET_SLEEP_TOGGLE:
      return {
        ...state,
        sleepToggle: !state.sleepToggle,
      };
    default:
      return state;
  }
};

export default setPokeAreaReducer;
