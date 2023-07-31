import {
  SET_HOURS,
  SET_AGE,
  SET_DAY,
  SET_HUNGER_ADD,
  SET_HUNGER_SUB,
  SET_LIFE,
  SET_ENERGY_ADD,
  SET_ENERGY_SUB,
  SET_SICK,
} from "../actions";

const INITIAL_STATE = {
  hour: 12,
  age: 0,
  day: 1,
  hunger: 5,
  life: 8,
  energy: 5,
  sickDay: 0,
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
        age: state.age + 1,
      };
    case SET_DAY:
      return {
        ...state,
        day: state.day % 7 + 1,
        
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
    case SET_ENERGY_ADD:
      return {
        ...state,
        energy: state.energy === 5 ? 5 : state.energy + 1,
      };
    case SET_ENERGY_SUB:
      return {
        ...state,
        energy: state.energy === 0 ? 0 : state.energy - 1,
      };
    case SET_LIFE:
      return {
        ...state,
        life: state.life - 1,
      };
    case SET_SICK:
      return {
        ...state,
        sickDay: action.payload,
      };
    default:
      return state;
  }
};

export default setPokeInfoReducer;
