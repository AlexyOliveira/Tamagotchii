import { combineReducers } from 'redux';
import setHoursReducer from './setHoursReducer';

const rootReducer = combineReducers({
  setHoursReducer,
});

export default rootReducer;