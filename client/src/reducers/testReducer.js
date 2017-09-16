import { TEST } from '../actions';

export function testReducer(state=null, action) {
  console.log('test-reducer called');
  switch(action.type) {
    case TEST:
      console.log('yes');
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
