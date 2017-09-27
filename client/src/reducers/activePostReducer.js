import { GET_SINGLE_POST, DELETE_POST } from '../actions';

export function activePostReducer(state = {}, action) {
  switch(action.type) {
    case GET_SINGLE_POST:
      return action.payload;
    case DELETE_POST:
      if(state.id === action.payload) {
        return {};
      }
      break;
    default:
      return state;
  }
}
