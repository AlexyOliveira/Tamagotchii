import { SET_HOURS, SET_AGE, SET_DAY } from "../actions";

const INITIAL_STATE = {
  hour: 0,
  age: 0,
  day: 1,
};

const setPokeInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HOURS:
      return {
        ...state,
        hour: action.payload,
      };
    case SET_AGE:
      return {
        ...state,
        age: state.age + action.payload,
      };
    case SET_DAY:
      return {
        ...state,
        day: state.day <= 6 ? state.day + action.payload : 1,
        age: state.day === 7 ? state.age + 1 : state.age,
      };
    default:
      return state;
  }
};

export default setPokeInfoReducer;
