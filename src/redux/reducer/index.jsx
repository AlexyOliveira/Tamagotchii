import { combineReducers } from 'redux';
import setPokeInfoReducer from './setPokeInfoReducer';
import setPokeAreaReducer from './setPokeAreaReducer';

const rootReducer = combineReducers({
  setPokeInfoReducer,
  setPokeAreaReducer,
});

export default rootReducer;