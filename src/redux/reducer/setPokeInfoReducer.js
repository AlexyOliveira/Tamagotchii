import {
  SET_HOURS,
  SET_AGE,
  SET_DAY,
  SET_HUNGER_ADD,
  SET_HUNGER_SUB,
  SET_LIFE,
} from "../actions";

const INITIAL_STATE = {
  hour: 0,
  age: 0,
  day: 1,
  hunger: 5,
  life: 8,
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
    case SET_HUNGER_ADD:
      return {
        ...state,
        hunger: state.hunger === 5 ? 5 : state.hunger + 1,
      };
    case SET_HUNGER_SUB:
      return {
        ...state,
        hunger: state.hunger === 0 ? 0 : state.hunger - 1,
      };
    case SET_LIFE:
      return {
        ...state,
        life: state.life - 1,
      };
    default:
      return state;
  }
};

export default setPokeInfoReducer;
