import { combineReducers } from 'redux';
import setPokeInfoReducer from './setPokeInfoReducer';

const rootReducer = combineReducers({
  setPokeInfoReducer,
});

export default rootReducer;