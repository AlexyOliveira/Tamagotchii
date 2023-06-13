import { SET_HOURS } from "../actions";

const INITIAL_STATE = {
    hour: 0,
  };

const setHoursReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SET_HOURS:
      return {
        ...state,
        hour: action.payload,
      };
    default:
      return state;
    }
  };
  
  export default setHoursReducer;