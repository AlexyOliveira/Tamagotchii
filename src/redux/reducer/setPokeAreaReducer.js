import { SET_AREA } from "../actions";

const INITIAL_STATE = {
    area: 'home',
  };
  
  const setPokeAreaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_AREA:
        return {
          ...state,
          area: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default setPokeAreaReducer;
  