import {
  GET_SINGLE_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions';

export function activePostReducer(state = {}, action) {
  switch(action.type) {
    case GET_SINGLE_POST:
      return action.payload;
    case DELETE_POST:
      if(state.id === action.payload) {
        return {};
      } else {
        return state;
      }
    case UPVOTE_POST:
    case DOWNVOTE_POST:
      if(action.payload.id === state.id) {
        return action.payload;
      } else {
        return state;
      }
    default:
      return state;
  }
}
