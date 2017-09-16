import { combineReducers } from 'redux';
import { testReducer } from './testReducer';

const rootReducer = combineReducers({
  ex: () => 'another one',
  testt: testReducer
});

export default rootReducer;
