import { GET_SINGLE_POST } from '../actions';

export function activePostReducer(state = [], action) {
  switch(action.type) {
    case GET_SINGLE_POST:
      return action.payload;
    default:
      return state;
  }
}
