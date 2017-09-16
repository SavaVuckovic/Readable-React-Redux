import { TEST } from '../actions';

export function testReducer(state=null, action) {
  switch(action.type) {
    case TEST:
      return action.payload;
    default:
      return state;
  }
}
